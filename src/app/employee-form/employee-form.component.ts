import { 
    Component,
    ViewContainerRef,
    ComponentFactoryResolver,
    ViewChild,
    OnInit,
    ChangeDetectorRef,
    ComponentRef
 } from '@angular/core';
import { CustomInput } from '../shared/form-components/custom-input/custom-input.component';
import { FormInputModal } from '../shared/form-components/modals/form-input.modal';
import { CustomSelect } from '../shared/form-components/custom-select/custom-select.component';
import { EmployeeFormService } from './employee-form.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FieldConfig } from '../dynamic-form/models/field-config.interface';

@Component({
    selector: 'employee-form',
    templateUrl: './employee-form.component.html',
    styleUrls: ['./employee-form.component.css'],
    providers: [ EmployeeFormService ]
})
export class EmployeeForm implements OnInit {
    private componentRef: ComponentRef<any>[];
    public employeeForm: FormGroup;
    public submitted: boolean = false;
    public formControls: any;  
    public loading: boolean = true;  

    @ViewChild('formContainer', {
        read: ViewContainerRef
    }) entry:  ViewContainerRef;

    constructor(
        private resolver: ComponentFactoryResolver,
        private employeeFormService: EmployeeFormService,
        private formBuilder: FormBuilder,
        private changeDetector : ChangeDetectorRef
    ){}

    ngOnInit() {        
        this.employeeFormService.getFormData()
            .subscribe((resArr: FieldConfig[]) => {
                this.loading = false;                
                this.employeeForm = this.formBuilder.group(this.getValidationFormGroup(resArr));
                this.changeDetector.detectChanges();
                this.componentRef = [];
                resArr.forEach((obj, index) => {                
                    if(obj.type === 'input') {
                        this.createComponent(obj.payload, CustomInput, index);
                    } else if (obj.type === 'select') {
                        this.createComponent(obj.payload, CustomSelect, index);
                    }
                });                
            });        
    }

    getValidationFormGroup(arr) {
        const obj = {};
        arr.forEach((o) => {
            const validation = o.payload.validation;
            obj[o.payload.name] = ['', this.getValidatorsArr(validation)]
        });

        return obj;
    }

    getValidatorsArr(validation) {
        const arr = [];
        Object.keys(validation).forEach(element => {
            switch(element) {
                case 'empty': {
                    arr.push(Validators.required);
                    break;
                }
                case 'maxlength': {
                    arr.push(Validators.maxLength(validation[element].value));
                    break;
                }
                case 'minlength': {
                    arr.push(Validators.minLength(validation[element].value))
                }
            }
        });

        return arr;
    }

    createComponent(data, component, index) {
        const factory = this.resolver.resolveComponentFactory(component);        
        this.componentRef[index] = this.entry.createComponent(factory);
        const ref = this.componentRef[index];
        ref.instance.data = data;
        ref.instance.submitted = this.submitted;
        ref.instance.formControls = this.employeeForm.controls;
        ref.changeDetectorRef.detectChanges();
    }

    onSubmit() {
        this.submitted = true;              
        this.componentRef.forEach(ref => {
            ref.instance.cd.detectChanges();
        }); 
        if (this.employeeForm.invalid) {
            return;
        }        
        alert('SUCCESS!! :-)');
    }

    ngOnDestroy() {
        this.componentRef.forEach(ref => {
            ref.destroy();
        }); 
    }
}