import { Component, OnInit } from '@angular/core';
import { ViewExamService } from '../view-exam.service';

@Component({
  selector: 'app-live-exam',
  templateUrl: './live-exam.component.html',
  styleUrls: ['./live-exam.component.scss']
})
export class LiveExamComponent implements OnInit {
  currentExam : Array<any> = [];

  constructor(private viewSingleExam : ViewExamService) { }
    ngOnInit() {
      this.currentExam = this.viewSingleExam.drawOnlineExam();
    }

}
