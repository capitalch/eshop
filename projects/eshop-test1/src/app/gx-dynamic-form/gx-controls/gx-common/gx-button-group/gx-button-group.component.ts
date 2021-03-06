import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GxService } from '../../../gx-service/gx.service';

@Component({
  selector: 'app-gxbutton-group',
  templateUrl: './gx-button-group.component.html',
  styleUrls: ['./gx-button-group.component.scss']
})
export class GxButtonGroupComponent implements OnInit {
  @Input() layout: any;
  @Input() parent: FormGroup;
  cssClass: any = {};
  cssStyle: any = {};
  constructor(private gxService: GxService) { }

  ngOnInit() {
    this.gxService.prepareCssClassAndStyle(this);
  }

}
