import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GxService } from '../../../gx-service/gx.service';

@Component({
  selector: 'app-gx-mat-select',
  templateUrl: './gx-mat-select.component.html',
  styleUrls: ['./gx-mat-select.component.scss']
})
export class GxMatSelectComponent implements OnInit {

  @Input() layout: any;
  @Input() parent: FormGroup;
  options: any;

  constructor(private gxService: GxService, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.gxService.loadOptions(this);
    this.gxService.createGenericControl(this.layout, this.parent);
  }

}
