import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutBoxComponent } from './out-box.component';

describe('OutBoxComponent', () => {
  let component: OutBoxComponent;
  let fixture: ComponentFixture<OutBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
