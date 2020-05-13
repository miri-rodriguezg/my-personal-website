import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellingComponent } from './travelling.component';

describe('TravellingComponent', () => {
  let component: TravellingComponent;
  let fixture: ComponentFixture<TravellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
