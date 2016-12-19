const ah = require('./index');

const url = 'https://www.ah.nl/producten/product/wi33693/ah-halfvolle-melk';

ah.getNutritionFacts(url).then(console.log);
