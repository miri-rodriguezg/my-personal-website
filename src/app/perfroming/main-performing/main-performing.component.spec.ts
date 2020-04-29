import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPerformingComponent } from './main-performing.component';

describe('MainPerformingComponent', () => {
  let component: MainPerformingComponent;
  let fixture: ComponentFixture<MainPerformingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPerformingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPerformingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
