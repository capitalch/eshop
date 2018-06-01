import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { GxService } from '../../../gx-service/gx.service';

@Component({
  selector: 'lib-gx-mat-input',
  templateUrl: './gx-mat-input.component.html',
  styleUrls: ['./gx-mat-input.component.scss']
})
export class GxMatInputComponent implements OnInit {

  @Input() layout: any;
  @Input() parent: FormGroup;
  control: FormControl;
  messages: string[] = [];
  cssClass: any = {};
  cssStyle: any = {};
  constructor(private gxService: GxService, private fb: FormBuilder) { }

  ngOnInit() {
    this.gxService.createGenericControl1(this);
    this.gxService.prepareCssClassAndStyle(this, 'input');
  }
}
