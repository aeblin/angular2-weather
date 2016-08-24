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
var router_1 = require('@angular/router');
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: "home",
            directives: [router_1.ROUTER_DIRECTIVES],
            template: "\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12 text-center\">\n          <h1>Hi, Swirl.</h1>\n        </div>\n      </div>\n    </div>\n   ",
            host: {
                '[@routeAnimation]': 'true',
                '[style.display]': "'block'"
            },
            animations: [
                core_1.trigger('routeAnimation', [
                    core_1.transition('void => *', [
                        core_1.animate('0.5s linear', core_1.keyframes([
                            core_1.style({
                                transform: 'scale(1,0.8) translate3d(0,0,0)',
                                filter: 'brightness(30)',
                                opacity: 1,
                                offset: 0
                            }),
                            core_1.style({ transform: 'scale(1,0.8) translate3d(0,100%,0)', offset: 0.035 }),
                            core_1.style({ transform: 'scale(1,0.8) translate3d(0,-100%,0)', opacity: 1, offset: 0.036 }),
                            core_1.style({
                                transform: 'scale(1.3,0.6) translate3d(0,100%,0)',
                                filter: 'brightness(30)',
                                opacity: 0,
                                offset: 0.09
                            }),
                            core_1.style({
                                transform: 'scale(1,1) translate3d(0,0,0)',
                                filter: 'contrast(0) brightness(30)',
                                opacity: 0,
                                offset: 0.11
                            }),
                            core_1.style({
                                transform: 'scale(1,1) translate3d(0,0,0)',
                                filter: 'contrast(1) brightness(1.2) saturate(1.3)',
                                opacity: 1,
                                offset: 1
                            })
                        ]))
                    ]),
                    core_1.transition('* => void', [
                        core_1.animate('0.125s cubic-bezier(0.230, 1.000, 0.320, 1.000)', core_1.keyframes([
                            core_1.style({
                                transform: 'scale(1,1.3) translate3d(0,0,0)',
                                filter: 'brightness(1)',
                                opacity: 1,
                                offset: 0
                            }),
                            core_1.style({
                                transform: 'scale(0.000,0.0001) translate3d(0,0,0)',
                                filter: 'brightness(50)',
                                offset: 1
                            })
                        ]))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map