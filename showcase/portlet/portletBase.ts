
import {Portlet} from "./portlet"

export class PortletBase {    
    model:any;    
    constructor(parent:Portlet) {         
       this.model = parent.model;            
    }
}