import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTravellingComponent } from './main-travelling.component';

describe('MainTravellingComponent', () => {
  let component: MainTravellingComponent;
  let fixture: ComponentFixture<MainTravellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTravellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTravellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
