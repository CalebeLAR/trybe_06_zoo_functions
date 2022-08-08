const data = require('../data/zoo_data');

function verificaParametro(animal) {
  if (animal) {
    const { specie } = animal;
    const { sex } = animal;
    return { specie, sex };
  }
  return {};
}

function animalsLists(species, specie, sex) {
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
  return { ResidentBySpecies, animalsBySex };
}

function countAnimals(animal) {
  const { specie, sex } = verificaParametro(animal);
  const { species } = data;

  const { ResidentBySpecies, animalsBySex } = animalsLists(species, specie, sex);

  if (specie === undefined && sex === undefined) {
    return ResidentBySpecies;
  }
  if (sex === undefined) {
    return ResidentBySpecies[specie];
  }
  return animalsBySex;
}
module.exports = countAnimals;
