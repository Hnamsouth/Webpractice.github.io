import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentItemsDetailComponent } from './sent-items-detail.component';

describe('SentItemsDetailComponent', () => {
  let component: SentItemsDetailComponent;
  let fixture: ComponentFixture<SentItemsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentItemsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentItemsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
