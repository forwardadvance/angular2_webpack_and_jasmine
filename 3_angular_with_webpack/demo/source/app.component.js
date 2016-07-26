var core = require('@angular/core');

module.exports = core.Component({
  selector: "app",
  template:
  `
    Hello Webpack!
  `
})
.Class({
  constructor: function() {
    this.isHidden = true;
    this.x = 'test';
    this.color = 'blue';
  }
})
