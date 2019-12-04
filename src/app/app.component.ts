import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import { DynamicFormComponent } from './dynamic-form/containers/dynamic-form/dynamic-form.component';
import { Validators } from '@angular/forms';
import { FieldConfig } from './dynamic-form/models/field-config.interface';
import { EmployeeFormService } from './employee-form/employee-form.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit {
@ViewChild('content') content: ElementRef;
@ViewChild(DynamicFormComponent) form: DynamicFormComponent;
public config: Observable<FieldConfig[]>;

constructor(private employeeFormService: EmployeeFormService, private route: Router){}

ngOnInit() {    
  // this.config = this.employeeFormService.getFormData();     
  this.route.navigate(['home']);  
}
changeRoute() {
  this.route.navigate(['dashboard']); 
}

ngAfterViewInit() {
  // let previousValid = this.form.valid;
  //   this.form.changes.subscribe(() => {
  //     if (this.form.valid !== previousValid) {
  //       previousValid = this.form.valid;
  //       this.form.setDisabled('submit', !previousValid);
  //     }
  //   });
  
  //   this.form.setDisabled('submit', true);
  //   this.form.setValue('name', 'Todd Motto');
}

submit(value: {[name: string]: any}) {
  console.log(value);
}

  public downloadPDF() {
    let doc = new jsPDF();

    let specialElementsHandler = {
      '#editor': function(element, renderer) {
        return true;
      }
    }

    let content = this.content.nativeElement;
    let base64String = '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';
    doc.addFileToVFS('fontawesome-webfont.ttf', base64String);
    doc.addFont('fontawesome-webfont.ttf', 'FontAwesome', 'normal');
    doc.setFont('FontAwesome');
    doc.fromHTML(content.innerHTML, 15, 15, {
        'width': 190,
        'specialElementsHandler': specialElementsHandler
    });

    doc.save('test.pdf');
  }
}
