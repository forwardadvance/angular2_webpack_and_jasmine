require('reflect-metadata');
require('zone.js');
require('rxjs');

var bootstrap = require('@angular/platform-browser-dynamic').bootstrap;

var AppComponent  = require('./app.component');

document.addEventListener('DOMContentLoaded', function() {
  bootstrap(AppComponent);
});

//"http://api.openweathermap.org/data/2.5/weather?q=london&APPID=57d36da6b8187a992393dc6a0f4c96c3&callback=JSON_CALLBACK"

// "http://api.flickr.com/services/feeds/photos_public.gne?tags=cat&tagmode=any&format=json&jsoncallback=JSON_CALLBACK"
