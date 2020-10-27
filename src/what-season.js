const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(Date) {
  if(Date === null || Date === undefined ){
    return 'Unable to determine the time of year!'
  }
  if ( isNaN(Date) == true) {
    return 'THROWN'
  }
 if(Date.getMonth() >= 0 && Date.getMonth() <= 1 ||  Date.getMonth() == 11){
    return 'winter';
 }
 if(Date.getMonth() >= 2 && Date.getMonth() <= 4){
    return 'spring';
 }
 if(Date.getMonth() >= 5 && Date.getMonth() <= 7){
    return 'summer';
 }
 if(Date.getMonth() >= 8 && Date.getMonth() <= 10){
    return 'autumn';
 } 

 
};
