const fetch = require('isomorphic-fetch');

const urlTools = require('url');

const traverse = require('traverse');

const jsdom = require('jsdom');

const {
  zipObject,
} = require('lodash');

const parseColumn = (column) => Array.from(column).map(tr => tr.textContent);

const getJSONUrl = (url) => {
  const { pathname } = urlTools.parse(url);

  return `https://www.ah.nl/service/rest/delegate?url=${encodeURIComponent(pathname)}`;
}

const getNutritionFacts = (url) =>
  fetch(getJSONUrl(url))
  .then(response => {
    if (response.status >= 400) {
      throw new Error('Bad response from server');
    }
    return response.json();
  })
  .then(json => {
    let compositionString = '';

    traverse(json._embedded.lanes).forEach(function() {
      if (typeof this.node === 'string' && this.node.includes('Eiwitten')) {
        compositionString = this.node;
      }
    });

    const html =
      compositionString
        .replace(/\[/g, '<')
        .replace(/\]/g, '>');

    return new Promise(resolve => {
      jsdom.env(html, [], (err, window) => {
        const { document } = window;

        const labels =
          parseColumn(document.querySelectorAll('tr > td:nth-of-type(1)'));

        const values =
          parseColumn(document.querySelectorAll('tr > td:nth-of-type(2)'));

        resolve(
          zipObject(labels, values)
        );
      });
    });
  });

module.exports = {
  getNutritionFacts,
};
