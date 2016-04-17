import {Component, Pipe, forwardRef, Injector, DynamicComponentLoader, ElementRef, Inject, Injectable} from "angular2/core";
import {NgClass} from 'angular2/common';
import {Http} from "angular2/http";
import {Portlet} from "./portlet";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";


import {PortletTest} from "./portletTest";
import {PortletTest2} from "./portletTest2";
import {PortletService} from "./portletService";
import {PortletModel} from "./portletModel";
import {PubSub} from "./pubSub";

//binding tag ?
declare let System:any;
declare let fetch: any;

@Component({
    selector: "p-container",
    //host: {
    //'style': 'display: table; height: 100%',
    //'class': 'ep-main shapeshifted_container_q1neu6wn42pincex9a4i ui-droppable'
    //},
    templateUrl: "./showcase/portlet/portletContainer.html",
    directives: [Portlet, PortletTest, PortletTest2, NgClass]
})

/// <reference path="browser/ambient/jquery/index.d.ts" />
export class PortletContainer {
    //? 동기화 처리 관건
    pList: Observable<any[]>;       
    _observer : any;  
    _pList : any;
  
    //@ViewChild('myname') input;????
    constructor(public portletService:PortletService, public pubSub: PubSub) {
        //초기화 2번 호출 되는 이유는 무엇인가?
       this.pList = Observable.create((o) => {this._observer = o});
    }
    
    ngOnInit() {
        //포틀릿 정보 셋팅.
        this.portletService.getInfo()
           .subscribe(
                data => this._pList  = data,
                err => console.log("ERROR!!!"),
                () => {
                    this._observer.next(this._pList);
                    setTimeout(()=>{           
                        this.shapeshift();
                        //pub/sub설정.
                        this.pubSub.setSocket(this.setData, this);                          
                    }, 1000);                          
                }
            );
      
    }
  
    setData(data) {
        console.log(data);        
        
        this._pList[0].value = data.message;
    }

    //화면 활성화 후.
    ngAfterViewInit() {
        /*
            this.loadComponentConfig("./showcase/portlet/data.json")
                .then(components => Promise.all(components.map(p => this.loader.loadAsRoot(p, '#p_container', this.injector)))).then(() => this.shapeshift());
                */
        //this.elementRef.nativeElement.appendChild(p1);
        //elem.querySelector('div').appendChild(h3);
        //this.loader.loadAsRoot(PortletTest, '#p_main', null);
    }

    //ngAfterViewChecked() 
    createAll() {
        console.log("Got response from API", this.pList);
        //this.shapeshift();
    }

    //추가 버튼 후 추가.
    add(p: any) {
        console.log(p);
    }

    shapeshift() {
        $(document).ready(function () { /* code here */
            $(".ep-main").shapeshift({
                //align : 'left',
                animateOnInit: true,
                gutterX: 5,
                gutterY: 5
            }).off("ss-drop-complete").on("ss-drop-complete", function() {
                //끝난 후 업데이트.
            });
        });
    }


    loadComponentConfig(url) {
        return fetch(url).then(res => res.json()).then(componentList =>
            Promise.all(componentList.map(config => this.loadComponent(config)))
        );
    }

    loadComponent(configObject) {
        return System.import(configObject.path).then(componentModule => componentModule[configObject.component]);
    }


}