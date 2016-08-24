"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/throw');
var WeatherDataService = (function () {
    function WeatherDataService(http) {
        this.http = http;
        // private dataUrl = 'app/weather/forecasts-current-api.json'; // Mock Data - save yourself some API calls.
        this.dataUrl = 'http://api.wunderground.com/api/8e65e73be0457340/forecast/conditions/q/CA/94129.json';
        // Prep for move to input, away from hardcoded zip code
        this.baseUrl = 'http://api.wunderground.com/api/';
        this.apiKey = '8e65e73be0457340';
        this.dataRequests = '/forecast/conditions/q/CA/';
        this.zip = '94122';
    }
    WeatherDataService.prototype.getWeather = function () {
        return this.http.get(this.dataUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    WeatherDataService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    WeatherDataService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message : error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    WeatherDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WeatherDataService);
    return WeatherDataService;
}());
exports.WeatherDataService = WeatherDataService;
//# sourceMappingURL=weather-data.service.js.map