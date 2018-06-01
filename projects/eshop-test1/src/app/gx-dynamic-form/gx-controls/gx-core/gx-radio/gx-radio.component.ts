import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GxService } from '../../../gx-service/gx.service';

@Component({
  selector: 'app-gx-radio',
  templateUrl: './gx-radio.component.html',
  styleUrls: ['./gx-radio.component.scss']
})
export class GxRadioComponent implements OnInit {

  @Input() layout: any;
  @Input() parent: FormGroup;
  options: any;

  constructor(private gxService: GxService, private fb: FormBuilder) { }

  ngOnInit() {
    this.gxService.loadOptions(this);
    this.gxService.createGenericControl(this.layout, this.parent);
  }

}
