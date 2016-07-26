var core = require('@angular/core');
var UserService = require('./user.service');

module.exports = core.Component({
  selector: "app",
  template:
  `
    {{user | json}}
  `
})

.Class([UserService, {
  constructor: function(UserService) {
    this.user = UserService.get();
  }
}])

