var {Component} = require('@angular/core');
var {Jsonp, JSONP_PROVIDERS} = require('@angular/http');

module.exports = Component({
  selector: "app",
  directives: [],
  providers: [JSONP_PROVIDERS],
  template:
  `
    {{weather | json}}
  `
})
.Class({
  constructor: [Jsonp, function(jsonp) {
    var vm = this;
    vm.weather = {};
    var url = "http://api.openweathermap.org/data/2.5/weather?q=london&APPID=57d36da6b8187a992393dc6a0f4c96c3&callback=JSONP_CALLBACK"
    jsonp.get(url)
      .subscribe(function(response) {
        console.log(response.json());
        vm.weather = response.json();
      })
  }]
})
