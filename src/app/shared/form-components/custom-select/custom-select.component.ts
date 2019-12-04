import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { FormInputModal } from '../modals/form-input.modal';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
    selector: 'custom-select',
    templateUrl: './custom-select.component.html',
    styleUrls: ['custom-select.component.css'],
    viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class CustomSelect {
    @Input()
    public data: FormInputModal;
    
    @Input()
    public submitted: boolean;

    @Input()
    public formControls: any;

    constructor(public cd: ChangeDetectorRef) {}
}