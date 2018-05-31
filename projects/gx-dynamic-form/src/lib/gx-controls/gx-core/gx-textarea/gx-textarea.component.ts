import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GxService } from '../../../gx-service/gx.service';

@Component({
  selector: 'app-gx-textarea',
  templateUrl: './gx-textarea.component.html',
  styleUrls: ['./gx-textarea.component.scss']
})
export class GxTextareaComponent implements OnInit {

  @Input() layout: any;
  @Input() parent: FormGroup;
  classes: any = {};

  constructor(private gxService: GxService, private fb: FormBuilder) { }

  ngOnInit() {
    this.gxService.createGenericControl(this.layout, this.parent);
  }
}
