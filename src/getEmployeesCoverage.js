const data = require('../data/zoo_data');

const { employees, species } = data;

// Tive que criar essa função e separar da principal pq estava estourando o número máximo de linhas da getEmployeeCoverage
const constructInfosOfEmployees = (obj) => {
  const getEmployee = employees
    .find((employee) =>
      employee.firstName === obj.name || employee.lastName === obj.name || employee.id === obj.id);

  const verifyRespFor = getEmployee.responsibleFor
    .map((animalInfo) => species
      .find((animal) => animal.id === animalInfo));

  const getNameOfSpecies = verifyRespFor.map((animal) => animal.name);
  const getSpeciesLocation = verifyRespFor.map((animal) => animal.location);

  const infosOfEmployee = {
    id: getEmployee.id,
    fullName: `${getEmployee.firstName} ${getEmployee.lastName}`,
    species: getNameOfSpecies,
    locations: getSpeciesLocation,
  };
  return infosOfEmployee;
};

const getEmployeesCoverage = (obj) => {
  const arrOfEmployees = [];

  if (!obj) {
    employees.forEach((employee) => arrOfEmployees
      .push(constructInfosOfEmployees({ name: employee.firstName })));
    return arrOfEmployees;
  }

  try {
    constructInfosOfEmployees(obj);
  } catch (e) {
    throw Error('Informações inválidas');
  } return constructInfosOfEmployees(obj);
};

module.exports = getEmployeesCoverage;
