const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // const numChilds = entrants.filter((element) => (element.age < 18)).length;
  const numChilds = entrants.reduce((sumAges, object) => (
    (object.age < 18) ? sumAges + 1 : sumAges), 0);
  // const numAdults = entrants.filter((object) => (object.age >= 18 && object.age < 50)).length;
  const numAdults = entrants.reduce((sumAges, object) => (
    (object.age >= 18 && object.age < 50) ? sumAges + 1 : sumAges), 0);
  // const numSeniors = entrants.filter((object) => (object.age >= 50)).length;
  const numSeniors = entrants.reduce((sumAges, object) => (
    (object.age >= 50) ? sumAges + 1 : sumAges), 0);
  return { child: numChilds, adult: numAdults, senior: numSeniors };
}

function calculateEntry(entrants) {
  if (!entrants || Object.values(entrants).length === 0) {
    return 0;
  }

  const { prices: { child: priceChild, adult: priceAdult, senior: priceSenior } } = data;
  const reportEntrants = countEntrants(entrants);
  const { child, adult, senior } = reportEntrants;
  return child * priceChild + adult * priceAdult + senior * priceSenior;
}

module.exports = { calculateEntry, countEntrants };
