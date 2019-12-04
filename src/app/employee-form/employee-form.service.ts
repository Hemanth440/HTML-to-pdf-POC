import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormInputModal } from '../shared/form-components/modals/form-input.modal';
import { FieldConfig } from '../dynamic-form/models/field-config.interface';

@Injectable()
export class EmployeeFormService {
    constructor(private http: HttpClient) {}

    getFormData() {
        return this.http.get<FieldConfig[] >('src/data/dynamic-form.json');
    }
}