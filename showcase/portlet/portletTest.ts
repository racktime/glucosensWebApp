import {Component, Input, Inject} from 'angular2/core';

//binding tag ?
import {IPortlet} from "./IPortlet"
import {Portlet} from "./portlet"


@Component({
    selector: 'p-1',
    //host: {
        //'style': 'display: table; height: 100%',
        //'class': 'type-box01 box-color1'
    //},
    templateUrl: 'showcase/portlet/box1.html'

})


export class PortletTest implements IPortlet {
    className:string = 'type-box01 box-color1';
    model:any;
    //data-ss-colspan='2'
    constructor(parent:Portlet) {         
       parent.elementRef.nativeElement.className  = this.className;
       parent.elementRef.nativeElement.setAttribute('data-ss-colspan', 1);
       this.model = parent.model;            
    }

    setData():void {
    }
}