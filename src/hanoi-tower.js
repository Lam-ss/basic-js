const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const step = Math.pow(2, disksNumber) - 1;
  const secondsStep = Math.floor((step /turnsSpeed) * 3600);
  return { turns: step, seconds: secondsStep };
};
