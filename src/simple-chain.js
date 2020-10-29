const CustomError = require("../extensions/custom-error");

const chainMaker = {
  length : 0,
  chain : '',
  tempChain : '',

  chainMaker(){
    length = 0;
    chain = '';
    tempChain = '';
  },
  getLength() {
    return this.length;
  },
  addLink(value) {
    if(arguments.length == 0 || value == undefined || value == null){
      this.chain = this.chain + `~~()`;
    } else{
      if(this.chain == '') {
        this.chain = value;
      } else {
        this.chain = this.chain + `~~(${value})`;
      }
      this.length++;
    }
  },
  removeLink(position) {
    if(isNaN(position) == true){
      throw Error;
    } else {
      this.tempChain = this.chain.split('~~');
      searchValue = this.tempChain[position],
      this.chain = this.chain.replace(`~~(${searchValue})`,'');
      this.length--;
    }
  },
  reverseChain() {
    if(this.chain != ''){
    this.chain = this.chain.split('').reverse().join('')
    }
  },
  finishChain() {
    return this.chain;
  }
};

module.exports = chainMaker;
