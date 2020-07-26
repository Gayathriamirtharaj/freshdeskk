import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketupdateComponent } from './ticketupdate.component';

describe('TicketupdateComponent', () => {
  let component: TicketupdateComponent;
  let fixture: ComponentFixture<TicketupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
