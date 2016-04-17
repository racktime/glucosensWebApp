import {Component, DynamicComponentLoader, ElementRef, Input, Output} from "angular2/core";

import {IPortlet} from "./IPortlet"
import {PortletModel} from "./portletModel";

declare let System:any;

@Component({
    selector: '[p-render]',
    template: '<div #child></div>'
})

export class Portlet implements IPortlet {
    @Input()
    title:string = 'test';
    
    @Input()
    model:any;
    
    cssClass:any;
    //@Output()    
    constructor(public loader:DynamicComponentLoader, public elementRef:ElementRef) {      
 
    }
    
    ngAfterViewInit() {          
        //this. = 'type-box01 box-color1';        
        console.log(this.model);        
        System.import(this.model.path).then(o => {
            this.loader.loadIntoLocation(o[this.model.component], this.elementRef, 'child');
        });
        //console.log('Portlet ngAfterContentInit');
    }
    
    ngAfterContentChecked() {
        // this.footer is now with value set
        //console.log('Portlet ngAfterContentChecked');
    }
    
    setData():void {
    }
}