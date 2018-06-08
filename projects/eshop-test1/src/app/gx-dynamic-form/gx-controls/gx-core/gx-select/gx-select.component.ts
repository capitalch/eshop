import { Component, OnInit, Input } from '@angular/core';
import { GxService } from '../../../gx-service/gx.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gx-select',
  templateUrl: './gx-select.component.html',
  styleUrls: ['./gx-select.component.scss']
})
export class GxSelectComponent implements OnInit {

  @Input() layout: any;
  @Input() parent: FormGroup;
  classes: any = {};
  options: any;

  constructor(private gxService: GxService, private fb: FormBuilder) { }

  ngOnInit() {
    this.gxService.loadOptions(this);
    this.gxService.createGenericControl(this.layout, this.parent);
  }

}
