import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHobbiesComponent } from './main-hobbies.component';

describe('MainHobbiesComponent', () => {
  let component: MainHobbiesComponent;
  let fixture: ComponentFixture<MainHobbiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainHobbiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
