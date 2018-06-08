import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GxService } from '../../../gx-service/gx.service';

@Component({
  selector: 'app-gx-anchor',
  templateUrl: './gx-anchor.component.html',
  styleUrls: ['./gx-anchor.component.scss']
})
export class GxAnchorComponent implements OnInit {

  @Input() layout: any;
  @Input() parent: FormGroup;
  cssClass: any = {};
  cssStyle: any = {};

  constructor(private gxService: GxService, private fb: FormBuilder) { }

  ngOnInit() {
    this.gxService.prepareCssClassAndStyle(this, 'a');
  }
}
