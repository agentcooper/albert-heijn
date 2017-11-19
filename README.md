### albert-heijn

Albert Heijn (https://www.ah.nl/) API.

### Install

```
npm install albert-heijn
```

### Example

Run in [RunKit playground](https://npm.runkit.com/albert-heijn).

```js
const ah = require('albert-heijn');

const url = 'https://www.ah.nl/producten/product/wi33693/ah-halfvolle-melk';

ah.getNutritionFacts(url).then(console.log);

/*
{ Energie: '200 kJ (48 kcal)',
  Vet: '1,5 g',
  'Waarvan verzadigd': '1 g',
  'Waarvan enkelvoudig onverzadigd': '0,5 g',
  'Waarvan meervoudig onverzadigd': '0 g',
  Koolhydraten: '4,5 g',
  'Waarvan suikers': '4,5 g',
  Voedingsvezel: '0 g',
  Eiwitten: '3,5 g',
  Zout: '0,1 g',
  'Riboflavine/vitamine B2': '0,18 mg',
  'Vitamine B12': '0,47 µg',
  Calcium: '126 mg' }
*/
```
