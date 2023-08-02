

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ApiService } from '../api.service';
import { datamodel } from './model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  employeeform!: FormGroup;
  data: datamodel[] | undefined;


  constructor(private formBuilder: FormBuilder, private api: ApiService) { };
  ngOnInit(): void {
    this.employeeform = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', Validators.required],
      phonenumber: ['', Validators.required],
    })
    this.getemployee();
  };


  addemployee(data: datamodel) {
    this.api.addemployee(data).subscribe((res => {
      // this.addemployee.reset();
    }))
  };


  getemployee() {
    this.api.getEmployees().subscribe(
      res => {
        this.data = res;
      }
    );
  }
}
