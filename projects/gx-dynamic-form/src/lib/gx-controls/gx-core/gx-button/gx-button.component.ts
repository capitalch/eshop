import { Component, OnInit, Input } from '@angular/core';
import { GxService } from '../../../gx-service/gx.service';
import { IbukiService } from 'ibuki';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gx-button',
  templateUrl: './gx-button.component.html',
  styleUrls: ['./gx-button.component.scss']
})
export class GxButtonComponent implements OnInit {

  @Input() layout: any;
  @Input() parent: FormGroup;
  classes: any = {};

  constructor(private ibukiService: IbukiService, private gxService: GxService) { }

  ngOnInit() {
  }

  buttonClicked() {
    if (this.layout.subtype && this.layout.subtype === 'reset') {
        this.parent.reset();
    } else {
        this.gxService.processForm(this.parent);
        if (this.layout.validateForm) {
            this.gxService.validateAllFormFields(this.parent);
            if (this.parent.valid && (!this.parent.pending)) {
                this.ibukiService.emit(this.layout.id, this.parent);
            } else {
                console.log('Invalid form');
            }
        } else {
            this.ibukiService.emit(this.layout.id, this.parent);
        }
    }
}

}
