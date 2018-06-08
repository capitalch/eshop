import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GxService } from '../../../gx-service/gx.service';

@Component({
  selector: 'app-gx-mat-textarea',
  templateUrl: './gx-mat-textarea.component.html',
  styleUrls: ['./gx-mat-textarea.component.scss']
})
export class GxMatTextareaComponent implements OnInit {

  @Input() layout: any;
  @Input() parent: FormGroup;
  classes: any = {};

  constructor(private gxService: GxService, private fb: FormBuilder) { }

  ngOnInit() {
    this.gxService.createGenericControl(this.layout, this.parent);
  }

}
