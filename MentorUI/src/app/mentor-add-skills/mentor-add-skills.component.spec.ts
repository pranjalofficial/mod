import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorAddSkillsComponent } from './mentor-add-skills.component';

describe('MentorAddSkillsComponent', () => {
  let component: MentorAddSkillsComponent;
  let fixture: ComponentFixture<MentorAddSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorAddSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorAddSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
