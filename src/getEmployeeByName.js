const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const employee = data.employees
    .find((employe) => (employeeName === employe.firstName || employeeName === employe.lastName));
  return (employee !== undefined) ? employee : {};
}

module.exports = getEmployeeByName;
