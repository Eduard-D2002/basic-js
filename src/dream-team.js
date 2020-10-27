const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  let name = '';

  if(typeof arr != 'object' || arr === null){return false};
  for(let i = 0 ; i < arr.length; i++) {
     if(typeof arr[i] === 'string') {
      for(let z =0 ; z< arr[i].length; z++){
        arr[i] = arr[i].replace(' ','');
      }
      name = name + arr[i].slice(0,1).toUpperCase();
     }
  }
  return name.split('').sort().join('');
};
