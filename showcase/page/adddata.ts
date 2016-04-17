import {Component, Pipe} from 'angular2/core';
import {Fieldset} from "../../components/fieldset/fieldset";
import {Label} from "../control/label";
import {TranslatePipe} from 'ng2-translate/ng2-translate';

@Component({
    selector: 'test',
    templateUrl: 'showcase/page/adddata.html',
    directives: [Fieldset],
    pipes: [TranslatePipe]
})

export class AddData{
    constructor() {
        //this.loader = loader;
    }
  
}