const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  const animalsList = [];
  const especies = data['species'];
  for (let especie of especies) {
    //especie é um objeto, especies é um array de objetos;
    for (let id of ids){        
      if (id === especie.id){
        animalsList.push(especie)
      }
    }
  }
  return animalsList;
}

module.exports = getSpeciesByIds;
console.log(getSpeciesByIds('baa6e93a-f295-44e7-8f70-2bcdc6f6948d'));

