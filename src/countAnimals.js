const data = require('../data/zoo_data');

const { species } = data;

const getSpecieAndSex = ({ specie, sex }) => {
  const { residents } = species.find(({ name }) => name === specie);
  if (sex) {
    return residents.filter(({ sex: sexOf }) => sexOf === sex);
  } return residents;
};

const countAllAnimals = () => species.reduce(
  (animal, { name, residents }) => ({ ...animal, [name]: residents.length }), {},
);

const countAnimals = (animal) => {
  if (animal) {
    const capturedSpecieAndSex = getSpecieAndSex(animal);
    return capturedSpecieAndSex.length;
  } return countAllAnimals();
};
module.exports = countAnimals;
