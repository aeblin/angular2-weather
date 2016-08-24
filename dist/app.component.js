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
var router_1 = require('@angular/router');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'weather-app',
            template: "\n    <nav class=\"navbar\">\n      <div class=\"container\">\n        <ul class=\"nav navbar-nav\">\n          <li><a [routerLink]=\"['']\">Home</a></li>\n          <li><a [routerLink]=\"['/weather']\">Weather</a></li>\n        </ul>\n        <div class=\"navbar-form navbar-right\" role=\"search\">\n          <div class=\"input-group\">\n            <input\n              class=\"form-control\"\n              placeholder=\"Zip\"\n              type=\"text\"\n               />\n            <span class=\"input-group-btn\">\n              <button\n                type='button'\n                class=\"btn btn-info\"\n                onClick={props.onSubmitCity}>\n                Get Weather\n              </button>\n            </span>\n          </div>\n        </div>\n      </div>\n    </nav>\n\n    <main><router-outlet></router-outlet></main>\n  ",
            styleUrls: ['app/app.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map