import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CustomInput } from './shared/form-components/custom-input/custom-input.component';
import { CustomSelect } from './shared/form-components/custom-select/custom-select.component';
import { EmployeeForm } from './employee-form/employee-form.component';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { EmployeeFormService } from './employee-form/employee-form.service';
import { HomeComponent } from './home/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ChildOneComponent } from './home/child-one/child-one.component';
import { ChildTwoComponent } from './home/child-two/child-two.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomInput,
    CustomSelect,
    EmployeeForm,
    HomeComponent,
    ChildOneComponent,
    ChildTwoComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormModule,
    AppRoutingModule
  ],
  providers: [EmployeeFormService],
  bootstrap: [AppComponent],
  entryComponents: [CustomInput, CustomSelect]
})
export class AppModule { }
