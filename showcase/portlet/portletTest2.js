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
var portlet_1 = require("./portlet");
var PortletTest2 = (function () {
    function PortletTest2(parent) {
        this.className = 'type-box02 box-color2';
        parent.elementRef.nativeElement.className = this.className;
        parent.elementRef.nativeElement.setAttribute('data-ss-colspan', 2);
        this.model = parent.model;
    }
    PortletTest2.prototype.setData = function () {
    };
    PortletTest2 = __decorate([
        core_1.Component({
            selector: 'p-2',
            templateUrl: 'showcase/portlet/box2.html'
        }), 
        __metadata('design:paramtypes', [portlet_1.Portlet])
    ], PortletTest2);
    return PortletTest2;
}());
exports.PortletTest2 = PortletTest2;
