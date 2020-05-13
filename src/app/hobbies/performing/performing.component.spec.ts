import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformingComponent } from './performing.component';

describe('PerformingComponent', () => {
  let component: PerformingComponent;
  let fixture: ComponentFixture<PerformingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
