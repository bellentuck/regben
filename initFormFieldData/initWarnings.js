// to test
const warningTypes = require('./warnings');

function Warnings() {
  this.data = {};
  this.init = type => {
    this.data = Object.assign(this.data, { [type]: warningTypes[type] });
    return this;
  }
}

module.exports = new Warnings();
