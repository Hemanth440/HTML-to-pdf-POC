import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-select',
  styleUrls: ['form-select.component.scss'],
  template: `
    <div 
      class="dynamic-field form-select"
      [formGroup]="group">
      <label>{{ config.payload.label }}</label>
      <select 
        [formControlName]="config.payload.name"
        [ngClass]="{ 'is-invalid': formControl[config.payload.name].errors && !formControl[config.payload.name].pristine }"
      >
        <option value="">{{ config.payload.placeholder }}</option>
        <option *ngFor="let option of config.payload.options" [ngValue]="option.value">
          {{option.label}}
        </option>
      </select>
      <div *ngIf="formControl[config.payload.name].errors && !formControl[config.payload.name].pristine" class="invalid-feedback">
        <div *ngIf="formControl[config.payload.name].errors.required">{{config.payload.validation.empty}}</div>        
    </div>
    </div>
  `
})
export class FormSelectComponent implements Field {
  config: FieldConfig;
  group: FormGroup;

  get formControl() {
    return this.group.controls
  }
}
