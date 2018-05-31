import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { GxService } from '../../../gx-service/gx.service';
import { DateAdapter } from '@angular/material';
import * as moment_ from 'moment';

@Component({
  selector: 'app-gx-mat-datepicker',
  templateUrl: './gx-mat-datepicker.component.html',
  styleUrls: ['./gx-mat-datepicker.component.scss']
})
export class GxMatDatepickerComponent implements OnInit {

  @Input() layout: any;
  @Input() parent: FormGroup;
  classes; any = {};
  constructor(private gxService: GxService, private fb: FormBuilder, private adapter: DateAdapter<Date>) { }

  ngOnInit() {
    this.gxService.createGenericControl(this.layout, this.parent);
    this.adapter.setLocale(this.layout.locale || 'en-US');
  }

  change(event: any) {
    const moment = moment_;
    const val2 = moment(event.value).format('YYYY-MM-DD');
    const group = <FormGroup>this.parent;
    const ctrl = <FormControl>group.controls[this.layout.name];
    const val = moment.utc(val2);
    ctrl.setValue(val);
  }

}
