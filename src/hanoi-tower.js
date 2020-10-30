const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
  let turns = Math.pow(2,disksNumber) - 1;
  let seconds = 0;

  turnsSpeed = turnsSpeed / 60 / 60;
  seconds = parseInt(turns / turnsSpeed );
  return { 'turns' : turns, 'seconds' : seconds}
};
