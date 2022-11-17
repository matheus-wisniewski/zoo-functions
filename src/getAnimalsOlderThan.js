const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const getSpecies = data.species.find((specie) => specie.name === animal);
  return getSpecies.residents.every((specie) => specie.age >= age);
};

module.exports = getAnimalsOlderThan;
