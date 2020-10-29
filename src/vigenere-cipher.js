const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  isNotReverse = false;

  constructor(isNotReverse = true){
    this.isNotReverse = isNotReverse;
 }
 encrypt(str, keyStr) { 
    str = str.toUpperCase();
    keyStr = keyStr.toUpperCase();
    let encryptStr = '';
    let spaceCounter = 0;

    for ( let i = 0 ; i < str.length ; i++ ) { 
       if(str[i] != ' '){
          if(str[i].charCodeAt(0) > 64 && str[i].charCodeAt(0) < 91){
             let strCode = str[i].charCodeAt(0) - 65;
             let keyStrCode = 0;
                keyStrCode = keyStr[i % keyStr.length - spaceCounter].charCodeAt(0) - 65;
                spaceCounter = 0;
             encryptStr = encryptStr + String.fromCharCode((strCode + keyStrCode) % 26 + 65);
          }
          else {
             encryptStr = encryptStr + str[i];
          }
       } else {
          spaceCounter = 1;
          encryptStr = encryptStr + ' ';
       }
       
    }
    if(this.isNotReverse){
       return encryptStr
    } else{
       return encryptStr.split('').reverse().join('')
    }
 }    

 decrypt(str, keyStr) {
    str = str.toUpperCase();
    keyStr = keyStr.toUpperCase();
    let encryptStr = '';
    let spaceCounter = 0;

    for ( let i = 0 ; i < str.length ; i++ ) { 
       if(str[i] != ' '){
          if(str[i].charCodeAt(0) > 64 && str[i].charCodeAt(0) < 91){
             let strCode = str[i].charCodeAt(0) - 65;
             let keyStrCode = 0;
             keyStrCode = keyStr[i % keyStr.length - spaceCounter].charCodeAt(0) - 65;
             spaceCounter = 0;
             encryptStr = encryptStr + String.fromCharCode((strCode - keyStrCode + 26) % 26 + 65);
          }
          else {
             encryptStr = encryptStr + str[i];
          }
       } else {
          spaceCounter++;
          encryptStr = encryptStr + ' ';
       }
       
    }
    if(this.isNotReverse){
       return encryptStr
    } else{
       return encryptStr.split('').reverse().join('')
    }
 }
}

module.exports = VigenereCipheringMachine;
