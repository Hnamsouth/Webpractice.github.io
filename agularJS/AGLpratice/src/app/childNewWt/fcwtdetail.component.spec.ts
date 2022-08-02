import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FCWTdetailComponent } from './fcwtdetail.component';

describe('FCWTdetailComponent', () => {
  let component: FCWTdetailComponent;
  let fixture: ComponentFixture<FCWTdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FCWTdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FCWTdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
