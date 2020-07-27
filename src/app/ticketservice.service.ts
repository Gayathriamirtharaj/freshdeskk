import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpResponse} from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketserviceService {
  readonly rootUrl = "http://localhost:8080/v1/freshdesk";
  constructor(private http:HttpClient) { }
  createTicket(ticket : Ticket):Observable<any>{
    const data: Ticket = {
      "id":ticket.id,
      "email":ticket.email,
      "priority":ticket.priority,
      "status":ticket.status,
      "subject":ticket.subject,
      "created":ticket.created,
      "username":ticket.username,
      "query":ticket.query,
      "assignee_id":ticket.assignee_id,
      "contacts":ticket.contacts,
      
    
    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post("http://localhost:8080/v1/freshdesk/ticket",data,{headers : reqHeader})    
 
 }
 updateTicket(ticket:Ticket,id:number):Observable<any>
 {
  const data: Ticket = {
    "id":ticket.id,
    "email":ticket.email,
    "priority":ticket.priority,
    "status":ticket.status,
    "subject":ticket.subject,
    "created":ticket.created,
    "username":ticket.username,
    "query":ticket.query,
    "assignee_id":ticket.assignee_id,
    "contacts":ticket.contacts,

 }
 return this.http.put(`${this.rootUrl}/${id}`,data);    
}

getTicketList():Observable<any>
 
 {
   return this.http.get("http://localhost:8080/v1/freshdesk/getAllTickets/");
 }


delete(id: number): Observable<any> {
  return this.http.delete(`${this.rootUrl}/${id}`, { responseType: 'text' });
}







}
