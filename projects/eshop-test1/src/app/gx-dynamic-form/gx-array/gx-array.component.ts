import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { GxService } from '../gx-service/gx.service';

@Component({
  selector: 'app-gx-array'
  , templateUrl: './gx-array.component.html'
  , styleUrls: ['./gx-array.component.scss']
  // , changeDetection: ChangeDetectionStrategy.OnPush
})
export class GxArrayComponent implements OnInit {
  @Input() layout: any;
  @Input() parent: FormGroup;
  cssClass: any = {};
  cssStyle: any = {};
  constructor(
    private fb: FormBuilder
    , private gxService: GxService
  ) { }

  ngOnInit() {
    const groupValidators = this.gxService.getGroupValidators(this.layout.group);
    const group = this.fb.group({}, { validator: groupValidators.validator, asyncValidator: groupValidators.asyncValidator });
    const arrayValidators = this.gxService.getGroupValidators(this.layout);
    this.parent.setControl(this.layout.name, this.fb.array([group], arrayValidators.validator, arrayValidators.asyncValidator));
    this.gxService.prepareCssClassAndStyle(this);
  }

  removeFromArray(j) {
    const groupArray = <FormArray>this.parent.get(this.layout.name);
    groupArray.removeAt(j);
  }

  addGroupInArray(layout) {
    const groupArray = <FormArray>this.parent.get(this.layout.name);
    const groupValidators = this.gxService.getGroupValidators(this.layout.group);
    const group = this.fb.group({}, { validator: groupValidators.validator, asyncValidator: groupValidators.asyncValidator });
    groupArray.push(group);
  }

}
