const data = require('../data/zoo_data');

function isManager(id) {
  const { employees } = data;
  const managersList = [];
  employees.forEach((employee) => {
    const { managers } = employee;
    // eslint-disable-next-line no-shadow
    managers.forEach((managerId) => {
      if (!(managersList.includes(managerId))) {
        managersList.push(managerId);
      }
    });
  });
  return managersList.includes(id);
}

function getRelatedEmployees(managerId) {
  const { employees } = data;
  if (isManager(managerId)) {
    const managedPeople = [];
    employees.forEach((employee) => {
      if (employee.managers.includes(managerId)) {
        managedPeople.push(`${employee.firstName} ${employee.lastName}`);
      }
    });
    return managedPeople;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
