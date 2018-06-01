import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IbukiService } from 'ibuki';

@Component({
  selector: 'app-gx-error'
  , templateUrl: './gx-error.component.html'
  // , changeDetection: ChangeDetectionStrategy.OnPush
  , styleUrls: ['./gx-error.component.scss']
})
export class GxErrorComponent implements OnInit {
  @Input() layout: any = {};
  @Input() parent: FormGroup;
  @Input() control: any = {};
  constructor(
    private ibukiService: IbukiService
    , private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    if (this.parent && this.layout.name) {
      this.control = this.parent.get(this.layout.name);
    }
  }

  getMessages() {
    const messages = [];
    const a = this.control.errors && Object.keys(this.control.errors).forEach(x => {
      messages.push(this.layout.validation
        && this.layout.validation[x] && this.layout.validation[x].message.replace('$', this.layout.label
          || this.layout.placeholder || this.layout.name || this.layout.id));
    });

    return (messages);
  }

}
