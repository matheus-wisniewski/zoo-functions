const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  const getEmployee = employees.find(
    (employee) =>
      employee.firstName === employeeName
      || employee.lastName === employeeName,
  );

  if (!employeeName) {
    return {};
  }

  return getEmployee;
}

console.log(getEmployeeByName('Burl'));

module.exports = getEmployeeByName;
