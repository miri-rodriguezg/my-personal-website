import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingAppsComponent } from './gaming-apps.component';

describe('GamingAppsComponent', () => {
  let component: GamingAppsComponent;
  let fixture: ComponentFixture<GamingAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamingAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamingAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
