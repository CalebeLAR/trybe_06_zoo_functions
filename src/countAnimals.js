const data = require('../data/zoo_data');

// eslint-disable-next-line max-lines-per-function, sonarjs/cognitive-complexity
function countAnimals(animal) {
  let specie;
  let sex;
  if (animal) {
    specie = animal.specie;
    sex = animal.sex;
  }
  const { species } = data;
  const animaisResidentesPorEspécie = {};
  let numeroDeAnimaisPorSexo = 0;

  species.forEach((objAnimal) => {
    const { name, residents } = objAnimal;
    animaisResidentesPorEspécie[name] = residents.length;
    // eslint-disable-next-line no-const-assign
    if (specie === name) {
      // eslint-disable-next-line max-len
      numeroDeAnimaisPorSexo = residents.reduce((acc, curr) => ((curr.sex === sex) ? acc + 1 : acc), 0);
    }
  });
  if (specie === undefined && sex === undefined) {
    return animaisResidentesPorEspécie;
  }
  if (sex === undefined) {
    return animaisResidentesPorEspécie[specie];
  }
  return numeroDeAnimaisPorSexo;
}
module.exports = countAnimals;
