const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, obj) {
   let repeatTimes = obj.repeatTimes,
       separator = obj.separator,
       additionValue = obj.addition,
       additionRepeatTimes = obj.additionRepeatTimes,
       additionSeparator = obj.additionSeparator,
       finalStr = '';
       addition = '';
       
       if(separator == undefined) {
          separator = '+';
       }
       if(additionSeparator == undefined) {
         additionSeparator = '|';
       }
       if (repeatTimes == undefined && additionRepeatTimes == undefined ) {
          return (str + additionValue);
       }

   for (let i = 0 ; i < repeatTimes ; i++ ){
      for ( let j = 0; j < additionRepeatTimes; j++) {
         if( j == additionRepeatTimes - 1) {
             addition = addition + additionValue;
         } else {
             addition = addition + additionValue + additionSeparator
         }
      }
      if( i == repeatTimes - 1){
         finalStr = finalStr + str + addition;
      }else {
         finalStr = finalStr + str + addition + separator;
      }
      addition = '';
   }
   return finalStr;
};