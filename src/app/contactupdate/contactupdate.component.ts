import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import {ContactserviceService} from '../contactservice.service';
import { ToastrService } from 'ngx-toastr';
import { Contact } from '../contact';

@Component({
  selector: 'app-contactupdate',
  templateUrl: './contactupdate.component.html',
  styleUrls: ['./contactupdate.component.css']
})
export class ContactupdateComponent implements OnInit {

  contact:Contact;
  constructor(private contactservice:ContactserviceService,router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.reset();
  }
  reset(form?:NgForm){
    if(form !=null)
    form.reset();
    this.contact={  
      id:0,
      contacts:'',
      email:''
    }
  }

  OnSubmit(form: NgForm) {
    this.contactservice.updateContact(form.value,this.contact.id)
      .subscribe((data: any) => {
        console.log(form.value);
        var message="Updation success";
        this.toastr.success(message);
        this.reset(form);
      });
      }

}
