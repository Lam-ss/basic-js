const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  // throw new CustomError('Not implemented');
  let allCats = 0;
  let cat = "^^";
  for (let i = 0; i < array.length; i++) {
    array[i].forEach((item) => {
      if (item == cat) allCats++;
    });
  }
  return allCats;
};
