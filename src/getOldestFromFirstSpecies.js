const data = require('../data/zoo_data');

const { employees, species } = data;

const getOldestFromFirstSpecies = (id) => {
  const getFirstSpecie = employees
    .find((employee) => employee.id === id).responsibleFor[0];
  const getResidentsBySpecie = species
    .filter((specie) => specie.id === getFirstSpecie)[0].residents;
  const verifyTheOldest = getResidentsBySpecie
    .sort((a, b) => b.age - a.age)[0];
  const theOldest = [verifyTheOldest.name, verifyTheOldest.sex, verifyTheOldest.age];
  return theOldest;
};

module.exports = getOldestFromFirstSpecies;
