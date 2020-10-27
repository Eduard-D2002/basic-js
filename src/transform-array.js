const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (typeof arr != 'object') {
    throw Error;
 }

 let counter = 0;
 let arr1 = arr;

 for (let i = 0 ; i < arr1.length; i++) {
     if(arr1[i] == "--discard-next"){
        delete arr1[i] ;
         if(isNaN(arr[i+1]) != true) {
          delete arr1[i+1] ;
        }
         counter++;
      }
      if(arr1[i] == "--discard-prev"){
        delete arr1[i] ;
         if(isNaN(arr[i-1]) != true) {
          delete arr1[i-1] ;
        }
         counter++;
      }
      if(arr1[i] == "--double-next"){
        delete arr1[i] ;
         if(isNaN(arr[i+1]) != true) {
         arr1 = arr1.splice(i+1,0,arr1[i+1]);
         }
         counter++;
      }
      if(arr1[i] == "--double-prev"){
        delete arr1[i] ;
         if(isNaN(arr[i-1]) != true) {
         arr1 = arr1.splice(i-1,0,arr1[i-1]);
         }
         counter++;
      }
 }
 if (counter == 0){
  return arr;
}
 
 return arr1.filter(n => n)
};
