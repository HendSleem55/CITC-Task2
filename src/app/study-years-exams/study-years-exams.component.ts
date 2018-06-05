import { Component, OnInit } from '@angular/core';
import { PathService } from '../path.service';

@Component({
  selector: 'app-study-years-exams',
  templateUrl: './study-years-exams.component.html',
  styleUrls: ['./study-years-exams.component.scss']
})
export class StudyYearsExamsComponent implements OnInit {

  Path : object;

  constructor(private pathservice :PathService) {

    this.Path = pathservice.getPath();


   }

  ngOnInit() {
  }

}
