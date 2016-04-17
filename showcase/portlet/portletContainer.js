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
var common_1 = require('angular2/common');
var portlet_1 = require("./portlet");
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
var portletTest_1 = require("./portletTest");
var portletTest2_1 = require("./portletTest2");
var portletService_1 = require("./portletService");
var pubSub_1 = require("./pubSub");
var PortletContainer = (function () {
    //@ViewChild('myname') input;????
    function PortletContainer(portletService, pubSub) {
        var _this = this;
        this.portletService = portletService;
        this.pubSub = pubSub;
        //초기화 2번 호출 되는 이유는 무엇인가?
        this.pList = Observable_1.Observable.create(function (o) { _this._observer = o; });
    }
    PortletContainer.prototype.ngOnInit = function () {
        var _this = this;
        //포틀릿 정보 셋팅.
        this.portletService.getInfo()
            .subscribe(function (data) { return _this._pList = data; }, function (err) { return console.log("ERROR!!!"); }, function () {
            _this._observer.next(_this._pList);
            setTimeout(function () {
                _this.shapeshift();
                //pub/sub설정.
                _this.pubSub.setSocket(_this.setData, _this);
            }, 1000);
        });
    };
    PortletContainer.prototype.setData = function (data) {
        console.log(data);
        this._pList[0].value = data.message;
    };
    //화면 활성화 후.
    PortletContainer.prototype.ngAfterViewInit = function () {
        /*
            this.loadComponentConfig("./showcase/portlet/data.json")
                .then(components => Promise.all(components.map(p => this.loader.loadAsRoot(p, '#p_container', this.injector)))).then(() => this.shapeshift());
                */
        //this.elementRef.nativeElement.appendChild(p1);
        //elem.querySelector('div').appendChild(h3);
        //this.loader.loadAsRoot(PortletTest, '#p_main', null);
    };
    //ngAfterViewChecked() 
    PortletContainer.prototype.createAll = function () {
        console.log("Got response from API", this.pList);
        //this.shapeshift();
    };
    //추가 버튼 후 추가.
    PortletContainer.prototype.add = function (p) {
        console.log(p);
    };
    PortletContainer.prototype.shapeshift = function () {
        $(document).ready(function () {
            $(".ep-main").shapeshift({
                //align : 'left',
                animateOnInit: true,
                gutterX: 5,
                gutterY: 5
            }).off("ss-drop-complete").on("ss-drop-complete", function () {
                //끝난 후 업데이트.
            });
        });
    };
    PortletContainer.prototype.loadComponentConfig = function (url) {
        var _this = this;
        return fetch(url).then(function (res) { return res.json(); }).then(function (componentList) {
            return Promise.all(componentList.map(function (config) { return _this.loadComponent(config); }));
        });
    };
    PortletContainer.prototype.loadComponent = function (configObject) {
        return System.import(configObject.path).then(function (componentModule) { return componentModule[configObject.component]; });
    };
    PortletContainer = __decorate([
        core_1.Component({
            selector: "p-container",
            //host: {
            //'style': 'display: table; height: 100%',
            //'class': 'ep-main shapeshifted_container_q1neu6wn42pincex9a4i ui-droppable'
            //},
            templateUrl: "./showcase/portlet/portletContainer.html",
            directives: [portlet_1.Portlet, portletTest_1.PortletTest, portletTest2_1.PortletTest2, common_1.NgClass]
        }), 
        __metadata('design:paramtypes', [portletService_1.PortletService, pubSub_1.PubSub])
    ], PortletContainer);
    return PortletContainer;
}());
exports.PortletContainer = PortletContainer;
