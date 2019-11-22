import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorHomePageComponent } from './mentor-home-page.component';

describe('MentorHomePageComponent', () => {
  let component: MentorHomePageComponent;
  let fixture: ComponentFixture<MentorHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
