import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpResponse} from '@angular/common/http';
import  'rxjs/add/operator/map';
import { User } from './user';



@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  readonly rootUrl = "http://localhost:8080/v1/freshdesk";
  constructor(private http: HttpClient) { }

  registerUser(user : User):Observable<any>{
    const data: User = {
      "firstName":user.firstName,
      "lastName":user.lastName,
      "email":user.email,
      "password":user.password
    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post("http://localhost:8080/v1/freshdesk/accounts/register",data,{headers : reqHeader});
    
  }

  loginuser(email,password){
    const data:any={
      "email":email,
      "password":password
    }
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    return this.http.post("http://localhost:8080/v1/freshdesk/accounts/login",data);
  }


  
}
