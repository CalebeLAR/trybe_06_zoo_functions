const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // eslint-disable-next-line max-len
  const employee = data.employees
    .find((employe) => (employeeName === employe.firstName || employeeName === employe.lastName));
  return (employee !== undefined) ? employee : {};
}

module.exports = getEmployeeByName;
