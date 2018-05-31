import { Injectable } from '@angular/core';
import { GxTextareaComponent } from '../gx-controls/gx-core/gx-textarea/gx-textarea.component';
import { GxButtonComponent } from '../gx-controls/gx-core/gx-button/gx-button.component';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { GxGroupComponent } from '../gx-group/gx-group.component';
import { GxArrayComponent } from '../gx-array/gx-array.component';
import { IbukiService } from 'ibuki';
import { Observable } from 'rxjs/Observable';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class GxService {
  customValidators: any = {};
  options: any;
  ctrlId = 0;

  constructor(
    private fb: FormBuilder
    , private ibukiService: IbukiService
  ) {
  }

  getCtrlId() {
    this.ctrlId++;
    return ('xid'.concat(this.ctrlId.toString()));
  }

  registerOptions(opts) {
    this.options = opts;
  }

  registerCustomValidators(obj) {
    this.customValidators = obj;
  }

  createGenericControl(layout, parent: FormGroup) {
    const allValidators = this.getValidators(layout);
    const xControl = this.fb.control(layout.value || '', allValidators.validators, allValidators.asyncValidators);
    parent.setControl(layout.name, xControl);
  }

  initCheckBoxGroup(it) {
    const childControls = {};
    const group: FormGroup = this.fb.group(childControls);
    group.setValidators(this.checkboxGroupRequiredValidator);
    it.parent.setControl(it.layout.id, group);
    const f = () => {
      it.parent.setControl(it.layout.id, group);
      it.options.forEach(e => {
        group.setControl(e.id, this.fb.control(e.value));
      });
    };

    if (typeof (it.layout.options) === 'string') {
      const optionsName = it.layout.options;
      const opt = this.options[optionsName];
      if (opt instanceof Observable) {
        const sub = opt.subscribe(d => {
          it.options = d;
          d.forEach(e => {
            group.setControl(e.id, this.fb.control(e.value));
          });
          const a = sub && sub.unsubscribe();
        });
      } else if (typeof (opt) === 'function') {
        it.options = opt();
        f();
      } else {
        it.options = opt;
        f();
      }
    } else {
      it.options = it.layout.options;
      f();
    }
  }

  checkboxGroupRequiredValidator(group) {
    let valid = false;
    Object.values(group.controls).forEach((x: any) => {
      valid = x.value || valid;
    });
    const ret = valid ? null : { required: true };
    return (ret);
  }

  prepareCssClassAndStyle(it, main) {
    const a = it.layout.class && ((typeof it.layout.class === 'string')
      && (it.cssClass[main] = it.layout.class) || (it.cssClass = it.layout.class));
    // const b = it.layout.style && ((typeof it.layout.style === 'string')
    //   && (it.cssStyle.item = it.layout.style) || (it.cssStyle = it.layout.style));
    if (it.layout.style) {
      if (typeof it.layout.style === 'object') {
        const cssStyle = it.layout.style;
        const value = Object.values(cssStyle)[0];
        if (typeof value === 'object') {
          it.cssStyle = it.layout.style;
        } else {
          it.cssStyle[main] = it.cssStyle;
        }
      }
    }
  }

  /*
   Parameter 'it' is actually javaScript 'this' passed by reference.
   loadOptions() method loads 'this.options' may it be array of values
   or function returning an array or an observable returning an array.
  */
  loadOptions(it) {
    if (typeof (it.layout.options) === 'string') {
      const optionsName = it.layout.options;
      const opt = this.options[optionsName];
      if (typeof (opt) === 'function') {
        it.options = opt();
      } else if (opt instanceof Observable) {
        const sub = opt.subscribe(d => {
          it.options = d;
          this.ibukiService.emit(it.layout.id, null); // Trigger that options are populated in 'it'
          const a = sub && sub.unsubscribe();
        });
      } else {
        it.options = opt;
      }
    } else {
      it.options = it.layout.options;
    }
  }

  getGroupValidators(layout) {
    const validators = {
      validator: null
      , asyncValidator: null
    };
    if (layout.validation) {
      Object.keys(layout.validation).forEach(x => {
        if (layout.validation[x].async) {
          validators.asyncValidator = this.executeCustomValidation(x, layout.validation[x].arg);
        } else {
          validators.validator = this.executeCustomValidation(x, layout.validation[x].arg);
        }
      });
    }
    return (validators);
  }

  getValidators(layout) {
    const allValidators = {
      validators: [],
      asyncValidators: []
    };

    const a = layout.validation && Object.keys(layout.validation).map(x => {

      switch (x) {
        case 'required':
          (layout.type in { checkbox: '' }) ? allValidators.validators.push(Validators.requiredTrue)
            : allValidators.validators.push(Validators.required);
          break;
        case 'email':
          allValidators.validators.push(Validators.email);
          break;
        case 'minlength':
          allValidators.validators.push(Validators.minLength(layout.validation[x].value));
          break;
        case 'maxlength':
          allValidators.validators.push(Validators.maxLength(layout.validation[x].value));
          break;
        case 'pattern':
          allValidators.validators.push(Validators.pattern(layout.validation[x].value));
          break;
        default:
          const validatorName = x;
          const arg = layout.validation[x].arg;
          if (layout.validation[x].async) {
            allValidators.asyncValidators.push(this.executeCustomValidation(validatorName, arg));
          } else {
            allValidators.validators.push(this.executeCustomValidation(validatorName, arg));
          }
      }
    });
    return (allValidators);
  }

  executeCustomValidation(name: string, arg: {}) {
    const f = this.customValidators[name].call(this, arg, parent);
    return (f);
  }

  processForm(parent) {
    const myForm: any = parent;
    const meta = myForm.meta;
    const serverMeta = Object.assign({}, meta);
    delete serverMeta.client;
    const formValue = myForm.value;
    formValue['meta'] = serverMeta;
    // delete myForm.value.undefined;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched();
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      } else if (control instanceof FormArray) {
        (<FormArray>control).controls.forEach(x => {
          this.validateAllFormFields(<FormGroup>x);
        });
      }
    });
  }
}
