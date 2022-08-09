const data = require('../data/zoo_data');

const { species } = data;
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const getAnimalsAvailableList = (string) => {
  const animalsAvailable = [];
  species.forEach((objects) => {
    const { availability } = objects;
    if (availability.includes(string)) {
      animalsAvailable.push(objects.name);
    }
  });
  return animalsAvailable;
};
const buildSchedule = () => {
  const { hours } = data;
  const schedule = {};
  weekDays.forEach((string) => {
    if (string === 'Monday') {
      schedule[string] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      const openHour = hours[string].open;
      const closeHour = hours[string].close;
      schedule[string] = {
        officeHour: `Open from ${openHour}am until ${closeHour}pm`,
        exhibition: getAnimalsAvailableList(string),
      };
    }
  });
  return schedule;
};
function getSchedule(scheduleTarget) {
  const AllAnimalsList = species.map((object) => (object.name));
  if (!scheduleTarget) {
    return buildSchedule();
  }
  if (AllAnimalsList.includes(scheduleTarget)) {
    const animal = species.find((object) => (object.name === scheduleTarget));
    const animalSchedule = animal.availability;
    return animalSchedule;
  }
  if (weekDays.includes(scheduleTarget)) {
    const daySchedule = buildSchedule();
    return { [scheduleTarget]: daySchedule[scheduleTarget] };
  }
  return buildSchedule();
}
module.exports = getSchedule;
