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
var core_1 = require("angular2/core");
var Portlet = (function () {
    //@Output()    
    function Portlet(loader, elementRef) {
        this.loader = loader;
        this.elementRef = elementRef;
        this.title = 'test';
    }
    Portlet.prototype.ngAfterViewInit = function () {
        var _this = this;
        //this. = 'type-box01 box-color1';        
        console.log(this.model);
        System.import(this.model.path).then(function (o) {
            _this.loader.loadIntoLocation(o[_this.model.component], _this.elementRef, 'child');
        });
        //console.log('Portlet ngAfterContentInit');
    };
    Portlet.prototype.ngAfterContentChecked = function () {
        // this.footer is now with value set
        //console.log('Portlet ngAfterContentChecked');
    };
    Portlet.prototype.setData = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Portlet.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Portlet.prototype, "model", void 0);
    Portlet = __decorate([
        core_1.Component({
            selector: '[p-render]',
            template: '<div #child></div>'
        }), 
        __metadata('design:paramtypes', [core_1.DynamicComponentLoader, core_1.ElementRef])
    ], Portlet);
    return Portlet;
}());
exports.Portlet = Portlet;
