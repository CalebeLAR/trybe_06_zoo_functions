const data = require('../data/zoo_data');

const { employees, species } = data;

const getIdFirstSubordinateAnimal = (id) => {
  const employee = employees.find((employeCurrent) => (employeCurrent.id === id));
  const { responsibleFor } = employee;
  return responsibleFor[0];
};

function getOldestFromFirstSpecies(id) {
  const idAnimal = getIdFirstSubordinateAnimal(id);
  const animal = species.find((specie) => (specie.id === idAnimal));
  const residentAnimalsList = animal.residents;
  const OldestAnimal = residentAnimalsList.reduce((olderAge, ageCurrent) => (
    (olderAge.age >= ageCurrent.age) ? olderAge : ageCurrent));
  return Object.values(OldestAnimal);
}
getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');
module.exports = getOldestFromFirstSpecies;
