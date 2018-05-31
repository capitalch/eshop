import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GxService } from '../../../gx-service/gx.service';

@Component({
  selector: 'app-gx-checkbox',
  templateUrl: './gx-checkbox.component.html',
  styleUrls: ['./gx-checkbox.component.scss']
})
export class GxCheckboxComponent implements OnInit {

  @Input() layout: any;
  @Input() parent: FormGroup;
  classes: any = {};

  constructor(private gxService: GxService, private fb: FormBuilder, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.gxService.createGenericControl(this.layout, this.parent);
  }

}
