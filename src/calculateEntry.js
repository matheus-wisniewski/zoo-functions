const data = require('../data/zoo_data');

const { prices } = data;

const countEntrants = (arr) => {
  const counter = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  arr.forEach((entrant) => {
    if (entrant.age < 18) {
      counter.child += 1;
    } else if (entrant.age >= 18 && entrant.age < 50) {
      counter.adult += 1;
    } else {
      counter.senior += 1;
    }
  });
  return counter;
};

const calculateEntry = (entrants) => {
  if (!entrants || !entrants.length) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  const { child: childPrice, senior: seniorPrice, adult: adultPrice } = prices;
  return child * childPrice + adult * adultPrice + senior * seniorPrice;
};

module.exports = { calculateEntry, countEntrants };
