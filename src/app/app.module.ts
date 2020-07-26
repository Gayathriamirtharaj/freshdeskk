import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AuthguardGuard } from './authguard.guard';

import { UserserviceService } from './userservice.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { TicketComponent } from './ticket/ticket.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ContactcreateComponent } from './contactcreate/contactcreate.component';
import { ContactupdateComponent } from './contactupdate/contactupdate.component';
import { ContactdeleteComponent } from './contactdelete/contactdelete.component';
import { TicketcreateComponent } from './ticketcreate/ticketcreate.component';
import { TicketupdateComponent } from './ticketupdate/ticketupdate.component';
import { TicketlistComponent } from './ticketlist/ticketlist.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TicketComponent,
    ContactComponent,
    HomeComponent,
    ContactcreateComponent,
    ContactupdateComponent,
    ContactdeleteComponent,
    TicketcreateComponent,
    TicketupdateComponent,
    TicketlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthguardGuard,UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
