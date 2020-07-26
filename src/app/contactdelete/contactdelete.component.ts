import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { ContactserviceService } from "../contactservice.service";
import { Contact } from "../contact";
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactdelete',
  templateUrl: './contactdelete.component.html',
  styleUrls: ['./contactdelete.component.css']
})
export class ContactdeleteComponent implements OnInit {

  contact:Observable<Contact>;

  constructor(private contactservice:ContactserviceService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.contact = this.contactservice.getContactList();
  }


  delete(id: number) {
    this.contactservice.delete(id)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));
  }


}
