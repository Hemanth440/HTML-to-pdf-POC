import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-input',
  styleUrls: ['form-input.component.scss'],
  template: `
    <div 
      class="dynamic-field form-input" 
      [formGroup]="group">
      <label>{{ config.payload.label }}</label>
      <input
        type="text"
        [attr.placeholder]="config.payload.placeholder"
        [formControlName]="config.payload.name"
        [ngClass]="{ 'is-invalid': formControl[config.payload.name].errors && !formControl[config.payload.name].pristine }">        
      <div *ngIf="formControl[config.payload.name].errors && !formControl[config.payload.name].pristine" class="invalid-feedback">
        <div *ngIf="formControl[config.payload.name].errors.required">{{config.payload.validation.empty}}</div>
        <div *ngIf="formControl[config.payload.name].errors.maxlength">{{config.payload.validation.maxlength.message}}</div>
        <div *ngIf="formControl[config.payload.name].errors.minlength">{{config.payload.validation.minlength.message}}</div>
      </div>
    </div>
  `
})
export class FormInputComponent implements Field {
  config: FieldConfig;
  group: FormGroup;

  get formControl() {
    return this.group.controls
  }
}
