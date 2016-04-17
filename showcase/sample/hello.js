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
var browser_1 = require('angular2/platform/browser');
var ng2_translate_1 = require('ng2-translate/ng2-translate');
var http_1 = require('angular2/http');
var HelloApp = (function () {
    function HelloApp(translate) {
        this.translate = translate;
        this.name = 'World';
        // use navigator lang if available
        var userLang = navigator.language.split('-')[0];
        userLang = /(fr|en)/gi.test(userLang) ? userLang : 'en';
        // this trigger the use of the french or english language after setting the translations
        translate.use(userLang);
    }
    HelloApp = __decorate([
        core_1.Injectable(),
        core_1.Component({
            selector: 'hello-app',
            template: "\n        <h1>Hello, {{name}}!</h1>\n        Say \"<b>{{ 'HELLO' | translate:'{value: \"world\"}' }}</b>\" to: <input [value]=\"name\" (input)=\"name = $event.target.value\">\n        <br/>\n        Change language:\n        <select (change)=\"translate.use($event.target.value)\">\n            <option *ngFor=\"#lang of ['fr', 'en']\" [selected]=\"lang === translate.currentLang\">{{lang}}</option>\n        </select>\n    ",
            pipes: [ng2_translate_1.TranslatePipe]
        }), 
        __metadata('design:paramtypes', [ng2_translate_1.TranslateService])
    ], HelloApp);
    return HelloApp;
}());
exports.HelloApp = HelloApp;
// Instantiate TranslateService in the bootstrap so that we can keep it as a singleton
browser_1.bootstrap(HelloApp, [http_1.HTTP_PROVIDERS, ng2_translate_1.TRANSLATE_PROVIDERS]);
