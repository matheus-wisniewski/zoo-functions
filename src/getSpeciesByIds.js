const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const arrOfSpecies = [];
  ids.forEach((specieId) => {
    data.species.forEach((animal, index) => {
      if (animal.id === specieId) {
        arrOfSpecies.push(data.species[index]);
      }
    });
  }); return arrOfSpecies;
};
module.exports = getSpeciesByIds;
