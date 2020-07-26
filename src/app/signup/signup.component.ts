import { Component, OnInit } from '@angular/core';
import { UserserviceService} from '../userservice.service';
import { NgForm } from '@angular/forms';
import {User} from '../user';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:User;

  constructor(private userService: UserserviceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.reset();
  }
  reset(form?:NgForm){
    if(form !=null)
    form.reset();
    this.user={
      firstName:'',
      lastName:'',
      email:'',
      password:''
    }
  }

  OnSubmit(form: NgForm) {
    this.userService.registerUser(form.value)
      .subscribe((data: any) => {
        console.log(form.value);
        // if (data.Succeeded == true) {
        //   this.reset(form);
        //   this.toastr.success("User registration successful");
        // }
        var message="Registration success";
        this.toastr.success(message);
        this.reset(form);
      });
  }


}
