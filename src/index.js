class SmartCalculator {
  constructor(initialValue) {
    this.express=String(initialValue);

  }

  add(number) {
    this.express+="+"+number;
    return this;
  }
  
  subtract(number) {
    this.express+="-"+number;
    return this;
  }

  multiply(number) {
    this.express+="*"+number;
    return this;
  }

  devide(number) {
    this.express+="/"+number;
    return this;
  }

  pow(number) {
    this.express+="**"+number;
    return this;
  }
  toString(){
      return eval(this.express);
  }

}

module.exports = SmartCalculator;
