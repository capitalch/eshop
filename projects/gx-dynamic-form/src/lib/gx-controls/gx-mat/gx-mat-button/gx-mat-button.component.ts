import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GxService } from '../../../gx-service/gx.service';
import { IbukiService } from 'ibuki';

@Component({
  selector: 'app-gx-mat-button',
  templateUrl: './gx-mat-button.component.html',
  styleUrls: ['./gx-mat-button.component.scss']
})
export class GxMatButtonComponent implements OnInit {

  @Input() layout: any;
  @Input() parent: FormGroup;

  constructor(private gxService: GxService, private fb: FormBuilder, private ibukiService: IbukiService) { }

  ngOnInit() {
    // this.gxService.createGenericControl(this.layout, this.parent);
  }

  buttonClicked() {
    this.gxService.processForm(this.parent);
    if (this.layout.validateForm) {
        this.gxService.validateAllFormFields(this.parent);
        if (this.parent.valid && (!this.parent.pending)) {
            this.ibukiService.emit(this.layout.actionId, this.parent);
        } else {
            console.log('Invalid form');
        }
    } else {
        this.ibukiService.emit(this.layout.actionId, this.parent);
    }
  }
}
