import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppsComponent } from './mobile-apps.component';

describe('MobileAppsComponent', () => {
  let component: MobileAppsComponent;
  let fixture: ComponentFixture<MobileAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
