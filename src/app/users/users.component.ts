import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonService } from '../common.service';
declare var $: any;
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  userForm: any;
  users: any;
  constructor(public fb: FormBuilder, private service: CommonService) {
    this.userForm = this.fb.group({
      Name: [""],
      Email: [""],
      Mobile: [""],
      Age: [""]

    })
  }
  ngOnInit(): void {
    this.GetAllUser();
  }
  SubmitForm() {
    this.service.AddUpdateUser(this.userForm.value).subscribe(data => {
      alert("Added");
      this.userForm.reset();
      this.GetAllUser();
      console.log(data);
    });
  }

  GetAllUser() {
    this.service.GetAllUser().subscribe(data => {
      console.log("user", data);
      this.users = data;
    });
  }


  DeleteUserByID(ID: any) {
    this.service.DeleteUserByID(ID).subscribe(data => {
      alert("User Deleted");
      this.GetAllUser();
    });
  }
  GetUserByID(ID: any) {
    this.service.GetUserByID(ID).subscribe(data => {
      console.log("User detail:", data);
      $("#home").addClass('show');
      $("#home").addClass('active');
      $("#profile").removeClass('show');
      $("#profile").removeClass('active');
      this.userForm.patchValue({
        Name: data.Name,
        Email: data.Email,
        Mobile: data.Mobile,
        Age: data.Age
      });
    });
  }
}
