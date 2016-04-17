import {Component, forwardRef, ElementRef, ViewChild, ContentChild, OnInit, Injectable, Inject} from 'angular2/core';
import {HTTP_PROVIDERS, JSONP_PROVIDERS} from "angular2/http";
import {TranslatePipe} from 'ng2-translate/ng2-translate';

import {PortletAddDlg} from "../pop/portletAddDlg";
import {PortletContainer} from "../portlet/portletContainer";
import {PortletService} from "../portlet/portletService";
import {PubSub} from "../portlet/pubSub";

import {Sample} from "../sample/sample";
import {Jsonp} from "../sample/jsonp";
import {WikipediaService} from "../sample/wikipediaService";

//import {PortletTest} from "./portlet/portletTest";
//import {PortletTest2} from "./portlet/portletTest2";

@Component({
    selector: 'test',
    providers: [PortletService, PubSub, WikipediaService, HTTP_PROVIDERS, JSONP_PROVIDERS],
    templateUrl: 'showcase/page/dashboard.html',
    directives: [PortletContainer, PortletAddDlg, Sample, Jsonp],
    pipes: [TranslatePipe]
})

export class DashBoardComponent{
    @ViewChild('PortletAddDlg')
    PortletAddDlg: PortletAddDlg;
    
    @ContentChild('portletContainer')
    portletContainer: PortletContainer;
    
    constructor() {
        //this.loader = loader;
    }
  
    addEvent(p:any) {
        this.portletContainer.add(p);
    }
}