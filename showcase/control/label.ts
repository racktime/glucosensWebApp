import {Component, Input} from 'angular2/core';
import {TranslateService, TranslatePipe, TRANSLATE_PROVIDERS} from 'ng2-translate/ng2-translate';

@Component({
    selector : 'p-label',
    template: '<p>Say {{ key | translate}}sadfdsaf</p>',
    pipes: [TranslatePipe]
})

//@Injectable
export class Label {
    display: boolean = false;

    @Input()
    key:string;

    constructor() {
        
    }
}