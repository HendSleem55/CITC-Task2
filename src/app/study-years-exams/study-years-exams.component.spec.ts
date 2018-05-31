import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyYearsExamsComponent } from './study-years-exams.component';

describe('StudyYearsExamsComponent', () => {
  let component: StudyYearsExamsComponent;
  let fixture: ComponentFixture<StudyYearsExamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyYearsExamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyYearsExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
