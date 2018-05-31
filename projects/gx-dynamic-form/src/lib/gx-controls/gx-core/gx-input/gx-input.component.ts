import { Component, OnInit, Input } from '@angular/core';
import { GxService } from '../../../gx-service/gx.service';
import { FormBuilder } from '@angular/forms';
import { IbukiService } from 'ibuki';

@Component({
    selector: 'app-gx-input'
    , styleUrls: ['./gx-input.component.scss']
    , templateUrl: './gx-input.component.html'
})
//
export class GxInputComponent implements OnInit {
    @Input() layout: any;
    @Input() parent: any;
    parentType = '';
    cssClass: any = {};
    cssStyle: any = {};
    constructor(
        private gxService: GxService
        , private fb: FormBuilder
        , private ibuki: IbukiService
    ) {
    }
    ngOnInit() {
        this.gxService.createGenericControl(this.layout, this.parent);
        this.parent.layouts ? this.parentType = 'form' : this.parentType = 'group';
        this.gxService.prepareCssClassAndStyle(this, 'input');
    }
    remove() {
        // used in context of name value pair control gx-name-value-input
        const controlId = this.layout.id;
        let controlsArray;
        this.parentType === 'form' ? controlsArray = this.parent.layouts :
            controlsArray = this.parent.layout.controls;

        const index = controlsArray.findIndex(x => x.id === controlId);
        controlsArray.splice(index, 1);

        const value = this.layout.label;

        this.parent.removeControl(this.layout.name);
        this.ibuki.emit('nv:remove', value);
    }
}
