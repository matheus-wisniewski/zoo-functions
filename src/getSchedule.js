const data = require('../data/zoo_data');

const { hours, species } = data;

const getScheduleOfSpecies = (weekDay) => {
  const scheduleOfSpecies = species
    .filter(({ availability }) => availability
      .includes(weekDay));
  return scheduleOfSpecies.map((specie) => specie.name);
};

const weekSchedule = () => {
  const schedule = {};

  const verifyIfIsMonday = Object.keys(hours);
  verifyIfIsMonday.forEach((weekDay) => {
    if (weekDay === 'Monday') {
      schedule.Monday = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      schedule[weekDay] = {
        officeHour: `Open from ${hours[weekDay].open}am until ${hours[weekDay].close}pm`,
        exhibition: getScheduleOfSpecies(weekDay),
      };
    }
  }); return schedule;
};

const verifyWeekDay = (weekDay) => {
  if (weekDay === 'Monday') {
    return { Monday:
      { officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      } };
  }
  const weekDays = Object.keys(hours);
  if (weekDays.includes(weekDay)) {
    return {
      [weekDay]: {
        officeHour: `Open from ${hours[weekDay].open}am until ${hours[weekDay].close}pm`,
        exhibition: getScheduleOfSpecies(weekDay),
      } };
  } return weekDay;
};

const getSchedule = (scheduleTarget) => {
  const wichDayIs = verifyWeekDay(scheduleTarget);

  if (typeof wichDayIs === 'object') {
    return wichDayIs;
  }

  const verifyParam = species.find(({ name }) => name === scheduleTarget);
  if (scheduleTarget === undefined || verifyParam === undefined) {
    return weekSchedule();
  } return verifyParam.availability;
};

module.exports = getSchedule;
