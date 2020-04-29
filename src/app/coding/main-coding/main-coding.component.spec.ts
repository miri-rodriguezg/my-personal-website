import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCodingComponent } from './main-coding.component';

describe('MainCodingComponent', () => {
  let component: MainCodingComponent;
  let fixture: ComponentFixture<MainCodingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCodingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
