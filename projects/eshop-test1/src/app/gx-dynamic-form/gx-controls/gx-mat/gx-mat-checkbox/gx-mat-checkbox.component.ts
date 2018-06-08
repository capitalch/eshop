import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GxService } from '../../../gx-service/gx.service';

@Component({
  selector: 'app-gx-mat-checkbox',
  templateUrl: './gx-mat-checkbox.component.html',
  styleUrls: ['./gx-mat-checkbox.component.scss']
})
export class GxMatCheckboxComponent implements OnInit {

  @Input() layout: any;
  @Input() parent: FormGroup;

  constructor(private gxService: GxService, private fb: FormBuilder) { }

  ngOnInit() {
    this.gxService.createGenericControl(this.layout, this.parent);
  }

}
