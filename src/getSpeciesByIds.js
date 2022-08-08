const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  const { species } = data;
  const selectedSpecies = species.filter((obj) => (ids.includes(obj.id)));
  return selectedSpecies;
}

module.exports = getSpeciesByIds;
