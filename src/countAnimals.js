const data = require('../data/zoo_data');

function verificaParametro(animal) {
  if (animal) {
    const { specie } = animal;
    const { sex } = animal;
    return { specie, sex };
  }
  return {};
}

// eslint-disable-next-line max-lines-per-function, sonarjs/cognitive-complexity
function countAnimals(animal) {
  const { specie, sex } = verificaParametro(animal);
  const { species } = data;
  const ResidentBySpecies = {};
  let animalsBySex = 0;

  species.forEach((objAnimal) => {
    const { name, residents } = objAnimal;
    ResidentBySpecies[name] = residents.length;
    if (specie === name) {
      animalsBySex = residents
        .reduce((acc, curr) => ((curr.sex === sex) ? acc + 1 : acc), 0);
    }
  });
  if (specie === undefined && sex === undefined) {
    return ResidentBySpecies;
  }
  if (sex === undefined) {
    return ResidentBySpecies[specie];
  }
  return animalsBySex;
}
module.exports = countAnimals;
