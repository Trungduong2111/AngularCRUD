import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  userForm: any;
  constructor(public fb: FormBuilder) {
    this.userForm = this.fb.group({
      Name: [""],
      Email: [""],
      Mobile: [""],
      Age: [""]

    })
  }
  SubmitForm(){
    console.log(this.userForm.value)
  }
}
