import {Component, Inject} from 'angular2/core';

import {IPortlet} from "./IPortlet";
import {Portlet} from "./portlet";

@Component({
    selector: 'p-2',
    templateUrl: 'showcase/portlet/box2.html'
})

export class PortletTest2 implements IPortlet {
    className:string = 'type-box02 box-color2';
    model:any;
    constructor(parent:Portlet) {         
       parent.elementRef.nativeElement.className  = this.className;
       parent.elementRef.nativeElement.setAttribute('data-ss-colspan', 2);
       this.model = parent.model;            
    }

    setData():void {
    }
}