import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestJSONComponent } from './test-json.component';

describe('TestJSONComponent', () => {
  let component: TestJSONComponent;
  let fixture: ComponentFixture<TestJSONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestJSONComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestJSONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
