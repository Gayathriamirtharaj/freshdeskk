import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { TicketserviceService } from "../ticketservice.service";
import { Ticket } from "../ticket";
import { Router } from '@angular/router';
@Component({
  selector: 'app-ticketlist',
  templateUrl: './ticketlist.component.html',
  styleUrls: ['./ticketlist.component.css']
})
export class TicketlistComponent implements OnInit {
  ticket:Observable<Ticket>;

  constructor(private ticketservice:TicketserviceService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData()
  }
  reloadData(){
    this.ticket = this.ticketservice.getTicketList();
  }

  delete(id: number) {
    this.ticketservice.delete(id)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));
  }

}
