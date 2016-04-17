import {Component, Directive} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: '[menu]',     //context, [], div.ss 
    templateUrl: 'showcase/menu/menu.html',
    directives: [ROUTER_DIRECTIVES]
})

export class Menu {    
    activeMenuId: string;
    mobileMenuActive: boolean = false;
    menuClass:any = 'submenuhide';
    menuToggleClass:any;    
    
    constructor() {
              
    }
    
    menuToggle(e, id) {
        if(id != this.activeMenuId) 
            this.activeMenuId = id;            
        else
            this.activeMenuId = null;
        this.menuClass = {'submenushow': (id == this.activeMenuId), 'submenuhide': (id != this.activeMenuId)};
        this.menuToggleClass = this.activeMenuId;
        e.preventDefault();
    }
   
    go(e, id) {        
        this.mobileMenuActive = false;
        e.preventDefault();
    }
   
}