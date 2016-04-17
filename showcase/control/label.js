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
var core_1 = require('angular2/core');
var ng2_translate_1 = require('ng2-translate/ng2-translate');
var Label = (function () {
    function Label() {
        this.display = false;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Label.prototype, "key", void 0);
    Label = __decorate([
        core_1.Component({
            selector: 'p-label',
            template: '<p>Say {{ key | translate}}sadfdsaf</p>',
            pipes: [ng2_translate_1.TranslatePipe]
        }), 
        __metadata('design:paramtypes', [])
    ], Label);
    return Label;
}());
exports.Label = Label;
