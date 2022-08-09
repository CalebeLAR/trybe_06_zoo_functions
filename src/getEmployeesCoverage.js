const data = require('../data/zoo_data');

const { employees, species } = data;

const getEmployee = (object) => {
  const employee = employees.find((currEmplo) =>
    ((currEmplo.id === object.id
    || currEmplo.firstName === object.name
    || currEmplo.lastName === object.name)));
  if (employee) {
    return employee;
  }
};
const getLocationByResponsibleList = (responsibleFor, item) => {
  const arraySpeciesLocation = [];
  const listAnimals = [];
  species.forEach((specie) => {
    if (responsibleFor.includes(specie.id)) {
      arraySpeciesLocation.push(specie.location);
      listAnimals.push(specie.name);
    }
  });
  return { listSpeciesLocation: arraySpeciesLocation, listSpecies: listAnimals };
};
function getReportEmployee(object) {
  const employee = getEmployee(object);
  const { id, firstName, lastName, responsibleFor } = employee;
  const { listSpeciesLocation, listSpecies } = (getLocationByResponsibleList(responsibleFor));
  return { id,
    fullName: `${firstName} ${lastName}`,
    species: listSpecies,
    locations: listSpeciesLocation };
}
function getEmployeesCoverage(object) {
  if (!object) {
    return employees.map((employeeCurrent) => (getReportEmployee(employeeCurrent)));
  }
  const employee = getEmployee(object);
  if (employee) {
    return getReportEmployee(employee);
  }
  throw new Error('Informações inválidas');
}
module.exports = getEmployeesCoverage;
