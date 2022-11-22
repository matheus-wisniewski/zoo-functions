const data = require('../data/zoo_data');

const { employees } = data;

const getEmployeesCoverage = ({ name, last, identificator }) => {
  const { id, firstName, lastName, responsibleFor } = employees
    .find((employee) =>
      employee.name === name || employee.lastName === last || employee.id === identificator);

  const infosOfEmployee = {
    id,
    fullName: `${firstName} ${lastName}`,
    species: responsibleFor,
    locations: responsibleFor.map((specie) => specie.location),
  };
  return infosOfEmployee;
};

console.log(getEmployeesCoverage('Stephanie'));
module.exports = getEmployeesCoverage;
