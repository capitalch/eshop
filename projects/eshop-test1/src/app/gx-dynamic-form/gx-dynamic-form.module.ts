import { NgModule, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GxFormComponent } from './gx-form/gx-form.component';
import { AngularMaterialModule } from 'angular-material';
import { GxTextareaComponent } from './gx-controls/gx-core/gx-textarea/gx-textarea.component';
import { GxInputComponent } from './gx-controls/gx-core/gx-input/gx-input.component';
import { GxButtonComponent } from './gx-controls/gx-core/gx-button/gx-button.component';
import { GxAnchorComponent } from './gx-controls/gx-core/gx-anchor/gx-anchor.component';
import { GxRadioComponent } from './gx-controls/gx-core/gx-radio/gx-radio.component';
import { GxSelectComponent } from './gx-controls/gx-core/gx-select/gx-select.component';
import { GxCheckboxComponent } from './gx-controls/gx-core/gx-checkbox/gx-checkbox.component';
import { GxService } from './gx-service/gx.service';
import { GxErrorComponent } from './gx-controls/gx-common/gx-error/gx-error.component';
import { GxGroupComponent } from './gx-group/gx-group.component';
import { GxArrayComponent } from './gx-array/gx-array.component';
import { GxMapperService } from './gx-service/gx-mapper.service';
import { GxMatAutocompleteComponent } from './gx-controls/gx-mat/gx-mat-autocomplete/gx-mat-autocomplete.component';
import { GxMatButtonComponent } from './gx-controls/gx-mat/gx-mat-button/gx-mat-button.component';
import { GxMatInputComponent } from './gx-controls/gx-mat/gx-mat-input/gx-mat-input.component';
import { GxMatTextareaComponent } from './gx-controls/gx-mat/gx-mat-textarea/gx-mat-textarea.component';
import { GxNameValueInputComponent } from './gx-controls/gx-common/gx-name-value-input/gx-name-value-input.component';
import { GxButtonGroupComponent } from './gx-controls/gx-common/gx-button-group/gx-button-group.component';
import { GxDynamicDirective } from './gx-controls/gx-common/gx-dynamic/gx-dynamic.directive';
import { GxCheckboxgroupComponent } from './gx-controls/gx-core/gx-checkboxgroup/gx-checkboxgroup.component';
import { GxMatDatepickerComponent } from './gx-controls/gx-mat/gx-mat-datepicker/gx-mat-datepicker.component';
import { GxMatRadioComponent } from './gx-controls/gx-mat/gx-mat-radio/gx-mat-radio.component';
import { GxMatSelectComponent } from './gx-controls/gx-mat/gx-mat-select/gx-mat-select.component';
import { GxMatCheckboxComponent } from './gx-controls/gx-mat/gx-mat-checkbox/gx-mat-checkbox.component';
import { GxMatCheckboxgroupComponent } from './gx-controls/gx-mat/gx-mat-checkboxgroup/gx-mat-checkboxgroup.component';

@NgModule({
  imports: [CommonModule
    , ReactiveFormsModule
    , FormsModule
    , AngularMaterialModule
  ],
  declarations: [
    GxFormComponent
    , GxDynamicDirective
    , GxTextareaComponent
    , GxButtonComponent
    , GxErrorComponent
    , GxGroupComponent
    , GxArrayComponent
    , GxButtonGroupComponent
    , GxAnchorComponent
    , GxInputComponent
    , GxCheckboxComponent
    , GxRadioComponent
    , GxSelectComponent
    , GxMatCheckboxComponent
    , GxMatRadioComponent
    , GxMatSelectComponent
    , GxMatTextareaComponent
    , GxMatInputComponent
    , GxMatButtonComponent
    , GxMatAutocompleteComponent
    , GxNameValueInputComponent
    , GxCheckboxgroupComponent
    , GxMatDatepickerComponent
    , GxMatCheckboxgroupComponent],
    entryComponents: [
    GxFormComponent
    // , GxDynamicDirective
    , GxTextareaComponent
    , GxButtonComponent
    , GxErrorComponent
    , GxGroupComponent
    , GxArrayComponent
    , GxButtonGroupComponent
    , GxInputComponent
    , GxAnchorComponent
    , GxCheckboxComponent
    , GxRadioComponent
    , GxSelectComponent
    , GxMatCheckboxComponent
    , GxMatRadioComponent
    , GxMatSelectComponent
    , GxMatTextareaComponent
    , GxMatInputComponent
    , GxMatDatepickerComponent
    , GxMatButtonComponent
    , GxCheckboxgroupComponent
    , GxMatAutocompleteComponent
    , GxNameValueInputComponent
    , GxMatCheckboxgroupComponent
  ],
  exports: [GxFormComponent]
})
export class GxDynamicFormModule { }
