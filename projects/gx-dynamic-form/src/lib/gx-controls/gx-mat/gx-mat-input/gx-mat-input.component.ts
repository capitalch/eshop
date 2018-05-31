import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GxService } from '../../../gx-service/gx.service';

@Component({
  selector: 'app-gx-mat-input',
  templateUrl: './gx-mat-input.component.html',
  styleUrls: ['./gx-mat-input.component.scss']
})
export class GxMatInputComponent implements OnInit {

  @Input() layout: any;
  @Input() parent: FormGroup;
  cssClass: any = {};
  cssStyle: any = {};
  constructor(private gxService: GxService, private fb: FormBuilder) { }

  ngOnInit() {
    this.gxService.createGenericControl(this.layout, this.parent);
  }
}
