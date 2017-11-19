const ah = require('albert-heijn');

const url = 'https://www.ah.nl/producten/product/wi33693/ah-halfvolle-melk';

async function main() {
  const nutrition = await ah.getNutritionFacts(url);

  console.log(nutrition);
}

main();
