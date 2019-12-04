import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormInputModal } from '../modals/form-input.modal';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
    selector: 'custom-input',
    templateUrl: './custom-input.component.html',
    styleUrls: ['./custom-input.component.css'],
    viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class CustomInput {
    @Input()
    public data: FormInputModal;

    @Input()
    public submitted: boolean;

    @Input()
    public formControls: any;

    constructor(public cd: ChangeDetectorRef) {}
}