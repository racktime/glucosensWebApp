import {Injectable} from 'angular2/core';
import {Http, URLSearchParams, Jsonp} from 'angular2/http';

import "rxjs/Rx";

//import {PortletModel} from "./portletModel";

@Injectable()
export class PortletService {
    constructor(public http:Http, private jsonp: Jsonp) {
  
    }
    
    dd:Array<string>;
    //포틀릿 정보 저장
    save() {
        
    }
    //포틀릿 정보 삭제
    delete() {
        
    }
    //포틀릿 추가.
    add() {
        
    }
    
    //포틀릿 정보 조회
    getInfo():any {
        return this.http.get("./showcase/portlet/data.json").map(res => res.json());
    }
    
    //업데이트
    setInfo() {
        
    }
    
    result(request): any {
        return ["asfd", "qwerqwer"];
    }

    search(): any {
        var search = new URLSearchParams();
        //search.set('action', 'opensearch');
        //search.set('search', term);
        //search.set('format', 'json');
        //return this.jsonp.get('./showcase/portlet/data.json', { search}).map((request) => request.json()[1]);
        let url = './showcase/portlet/setting.json';            
        return this.jsonp
            .get(url, {})
            .map(request => this.result(request));
    }
}




