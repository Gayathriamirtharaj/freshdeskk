import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';
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

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"home",
    canActivate:[AuthguardGuard],
    component:HomeComponent
  },
  {  
    path:"ticket",
    component:TicketComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"contactcreate",
    component:ContactcreateComponent
  },
  {
    path:"contactupdate",
    component:ContactupdateComponent
  },
  {
    path:"contactdelete",
    component:ContactdeleteComponent
  },
  {
    path:"ticketcreate",
    component:TicketcreateComponent
  },
  {
    path:"ticketupdate",
    component:TicketupdateComponent
  },
  {
    path:"ticketlist",
    component:TicketlistComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
