import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import {TicketserviceService} from '../ticketservice.service';
import { ToastrService } from 'ngx-toastr';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-ticketupdate',
  templateUrl: './ticketupdate.component.html',
  styleUrls: ['./ticketupdate.component.css']
})
export class TicketupdateComponent implements OnInit {
  ticket:Ticket;
  constructor(private ticketservice:TicketserviceService,router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.reset();
  }
  reset(form?:NgForm){
    form.reset();
    this.ticket={
      id:0,
      email:'',
      priority:0,
      status:'',
      subject:'',
      created:'',
      username:'',
      query:'',
      assignee_id:0,
      contacts:''

    }}

    OnSubmit(form: NgForm) {
      this.ticketservice.updateTicket(this.ticket.id,form.value)
        .subscribe((data: any) => {
          console.log(form.value);
          var message="Updation success";
          this.toastr.success(message);
          this.reset(form);
        });
        }

}
