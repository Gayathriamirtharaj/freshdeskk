import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketcreateComponent } from './ticketcreate.component';

describe('TicketcreateComponent', () => {
  let component: TicketcreateComponent;
  let fixture: ComponentFixture<TicketcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
