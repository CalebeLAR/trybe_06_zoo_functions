const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const especie = species.filter((objAnimal) => (objAnimal.name === animal));
  const bolean = especie[0].residents.every((individuo) => (individuo.age >= age));
  return bolean;
}

module.exports = getAnimalsOlderThan;
