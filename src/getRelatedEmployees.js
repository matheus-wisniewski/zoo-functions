const data = require('../data/zoo_data');

const { employees } = data;

const isManager = (id) => {
  const verifyManager = employees.find(({ managers }) => managers.includes(id));

  return verifyManager !== undefined;
};

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    return employees
      .filter(({ managers }) => managers.includes(managerId))
      .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
