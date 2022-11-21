const data = require('../data/zoo_data');

const { employees } = data;

const getEmployeeByName = (employeeName) => {
  const getEmployee = employees.find(
    (employee) =>
      employee.firstName === employeeName
      || employee.lastName === employeeName,
  );

  if (!employeeName) {
    return {};
  }

  return getEmployee;
};

console.log(getEmployeeByName('Strauss'));
module.exports = getEmployeeByName;
