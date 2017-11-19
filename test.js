import test from 'ava';

const ah = require('./');

const ahMilkUrl = 'https://www.ah.nl/producten/product/wi33693/ah-halfvolle-melk';

test('milk', async t => {
  const nutritionFacts = await ah.getNutritionFacts(ahMilkUrl);

  ['Energie', 'Koolhydraten', 'Eiwitten'].forEach(key => {
    t.true(typeof nutritionFacts[key] !== 'undefined', key);
  });
});
