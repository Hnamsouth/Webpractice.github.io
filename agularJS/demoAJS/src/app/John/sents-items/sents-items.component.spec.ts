import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentsItemsComponent } from './sents-items.component';

describe('SentsItemsComponent', () => {
  let component: SentsItemsComponent;
  let fixture: ComponentFixture<SentsItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentsItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
