import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {AppComponent} from './app.component'
import {ROUTER_PROVIDERS,LocationStrategy,HashLocationStrategy} from 'angular2/router';
import { Http, HTTP_PROVIDERS } from 'angular2/http';
import { AuthConfig, AuthHttp } from 'angular2-jwt';
import {TranslateLoader, TranslateStaticLoader, TranslateService} from 'ng2-translate/ng2-translate';

//enableProdMode();
bootstrap(AppComponent, [
    //FORM_PROVIDERS,
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,    
    //provide(LocationStrategy, {useClass: HashLocationStrategy}),
    provide(AuthHttp, {useFactory: (http) => {return new AuthHttp(new AuthConfig({tokenName: 'jwt'}), http);}, deps: [Http]}),
    provide(TranslateLoader, {useFactory: (http: Http) => new TranslateStaticLoader(http, './showcase/i18n', '.json'), deps: [Http]}),
    TranslateService
]);