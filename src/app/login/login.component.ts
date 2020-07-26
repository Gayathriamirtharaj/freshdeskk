import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginError: boolean=false;

  constructor(private userService:UserserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  OnSubmit(email,password){
    this.userService.loginuser(email,password).subscribe((data:any)=>{
      localStorage.setItem('userToken',data.access_token);
      this.router.navigate(['/home']);
    },
    (err:HttpErrorResponse)=>{
      this.isLoginError=true;
    });
  }

}
