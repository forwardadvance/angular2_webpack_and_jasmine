require('reflect-metadata');
require('rxjs');
require('zone.js');

var AppComponent = require('./app.component');
var UserService = require('./user.service');
var platform = require('@angular/platform-browser-dynamic');

document.addEventListener('DOMContentLoaded', function() {
  platform.bootstrap(AppComponent, [UserService]);
});
