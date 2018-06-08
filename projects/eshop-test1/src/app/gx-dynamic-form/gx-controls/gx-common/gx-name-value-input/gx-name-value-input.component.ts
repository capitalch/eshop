import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { startWith, map, filter, tap } from 'rxjs/operators';
import { GxService } from '../../../gx-service/gx.service';
import { IbukiService } from 'ibuki';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-gx-name-value-input',
  templateUrl: './gx-name-value-input.component.html',
  styleUrls: ['./gx-name-value-input.component.scss']
})
export class GxNameValueInputComponent implements OnInit, OnDestroy {
  @Input() layout: any;
  @Input() parent: any;
  cssClass: any = {};
  cssStyle: any = {};
  name = '';
  value = '';
  parentType = '';
  names = [];
  subs: any;
  filteredOptions: any;
  options: any;
  myControl: FormControl = new FormControl();

  constructor(private fb: FormBuilder
    , private gxService: GxService
    , private ibuki: IbukiService
    , private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.initAutoComplete();
    this.parent.layouts ? this.parentType = 'form' : this.parentType = 'group';
    this.subs = this.ibuki.filterOn('nv:remove').subscribe(d => {
      const idx = this.names.indexOf(d.data);
      const a = (idx >= 0) && (this.names.splice(idx, 1));
    });
    this.gxService.prepareCssClassAndStyle(this);
  }

  initAutoComplete() {
    const id = this.gxService.getCtrlId(); // id is used for messaging purpose only
    // In following code tap is used to copy myControl's value to name field
    // after myControl's value changes. Tap can be used to carry out arbitrary
    // piece of code in an observable. In earlier versions this was done through 'do' operator.
    const f = () => {
      this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(val => this.options
            .filter((opt: string) => opt.toLowerCase().includes(val.toLowerCase())))
          , tap(x => this.name = this.myControl.value)
        );
    };
    const sub = this.ibuki.filterOn(this.layout.id).subscribe(d => {
      f();
      sub.unsubscribe();
    });
    this.gxService.loadOptions(this);
    const a = this.options && (this.options.length > 0) && f();
  }

  addToParent() {
    const f = () => {
      const nameValueId = this.layout.id;
      let controlsArray;
      this.parentType === 'form' ? controlsArray = this.parent.layouts
        : controlsArray = this.parent.layout.controls;
      const index = controlsArray.findIndex(x => x.id === nameValueId);
      const obj = {
        type: 'input'
        , id: this.gxService.getCtrlId()
        , name: this.name
        , subtype: 'text'
        , value: this.value
        , label: this.name
        , remove: true
        , class: {
          div: this.cssClass['dynamic-div'],
          label: this.cssClass['dynamic-label'],
          input: this.cssClass['dynamic-input'],
          button: this.cssClass['dynamic-button'],
          i: this.cssClass['dynamic-i']
        }
        , style: {
          div: this.cssStyle['dynamic-div'],
          label: this.cssStyle['dynamic-label'],
          input: this.cssStyle['dynamic-input'],
          button: this.cssStyle['dynamic-button'],
          i: this.cssStyle['dynamic-i']
        }
      };
      controlsArray.splice(index, 0, obj);
      this.name = '';
      this.value = '';
      this.myControl.setValue('');
    };
    if (this.name && this.name.trim() && this.value && this.value.trim()) {
      if (this.names.includes(this.name.toLowerCase())) {
        this.snackBar.open('Cannot have duplicate names', null, { duration: 3000 });
      } else {
        this.names.push(this.name.toLowerCase());
        f();
      }
    } else {
      this.snackBar.open('Empty items are not allowed', null, { duration: 3000 });
    }
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
