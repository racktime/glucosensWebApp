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
var fieldset_1 = require("../../components/fieldset/fieldset");
var ng2_translate_1 = require('ng2-translate/ng2-translate');
var AddData = (function () {
    function AddData() {
        //this.loader = loader;
    }
    AddData = __decorate([
        core_1.Component({
            selector: 'test',
            templateUrl: 'showcase/page/adddata.html',
            directives: [fieldset_1.Fieldset],
            pipes: [ng2_translate_1.TranslatePipe]
        }), 
        __metadata('design:paramtypes', [])
    ], AddData);
    return AddData;
}());
exports.AddData = AddData;