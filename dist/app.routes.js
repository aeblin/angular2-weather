"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var weather_component_1 = require('./weather/weather.component');
exports.routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'weather', component: weather_component_1.WeatherComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map