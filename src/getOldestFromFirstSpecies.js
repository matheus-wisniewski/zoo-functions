const data = require('../data/zoo_data');

const { employees, species } = data;

const getOldestFromFirstSpecies = (id) => {
  const getFirstSpecie = employees
    .find((employee) => employee.id === id).responsibleFor[0];

  const getResiOfSpecies = species
    .filter((specie) => specie.id === getFirstSpecie)[0].residents;

  const getOldest = getResiOfSpecies
    .sort((a, b) => b.age - a.age)[0];

  const arrOfOldest = [getOldest.name, getOldest.sex, getOldest.age];
  return arrOfOldest;
};

console.log(getOldestFromFirstSpecies('01422318-ca2d-46b8-b66c-3e9e188244ed'));
module.exports = getOldestFromFirstSpecies;
