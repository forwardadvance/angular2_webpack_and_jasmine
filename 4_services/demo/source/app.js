require('reflect-metadata');
require('rxjs');
require('zone.js');

var AppComponent = require('./app.component');
var UserService = require('./user.service');
var platform = require('@angular/platform-browser-dynamic');

document.addEventListener('DOMContentLoaded', function() {
  platform.bootstrap(AppComponent, [UserService]);
});


// var injector = {
//   name: "dave",
//   greeting: "Hello",
//   greeter: new Greeter(name, greeting)
// }

// var sayHello = function(name, greeting) {
//   return greeting + " " + name;
// }


// sayHello(injector.name, injector.greeting)
