import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpResponse} from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {
  readonly rootUrl = "http://localhost:8080/v1/freshdesk";
  constructor(private http:HttpClient) { }
  createContact(contact : Contact):Observable<any>{
    const data: Contact = {
      "id":contact.id,
      "contacts":contact.contacts,
      "email":contact.email,
    
    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post("http://localhost:8080/v1/freshdesk/contact",data,{headers : reqHeader})    
 
 }
 updateContact(contact:Contact,id:number):Observable<any>{
   const data:Contact={
     "id":contact.id,
     "contacts":contact.contacts,
     "email":contact.email
   }
   var reqHeader=new HttpHeaders({'No-Auth':'True'}); 
   return this.http.put("http://localhost:8080/v1/freshdesk/contact/{id}",data)
 }
 delete(id: number): Observable<any> {
  return this.http.delete(`${this.rootUrl}/${id}`, { responseType: 'text' });
}
 getContactList():Observable<any>
 {
   return this.http.get("http://localhost:8080/v1/freshdesk/getAllContacts");
 }
}
