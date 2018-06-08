import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GxService } from '../../../gx-service/gx.service';

@Component({
  selector: 'app-gx-checkboxgroup',
  templateUrl: './gx-checkboxgroup.component.html',
  styleUrls: ['./gx-checkboxgroup.component.scss']
})
export class GxCheckboxgroupComponent implements OnInit {

  @Input() layout: any;
  @Input() parent: FormGroup;
  options: any;

  constructor( private gxService: GxService, private fb: FormBuilder) { }

  ngOnInit() {
    this.gxService.initCheckBoxGroup(this);
  }

}
