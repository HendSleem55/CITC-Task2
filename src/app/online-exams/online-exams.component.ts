import { Component, OnInit } from '@angular/core';
import { SaveExamService } from '../save-exam.service';
import { ViewExamService } from '../view-exam.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-online-exams',
  templateUrl: './online-exams.component.html',
  styleUrls: ['./online-exams.component.scss']
})
export class OnlineExamsComponent implements OnInit {
  myExams : Array<any>
  constructor(private aveExam: SaveExamService , private viewExam : ViewExamService, private x :Router) { 
   this.myExams =  aveExam.getExams()
  }

  ngOnInit() {
    
  }

  drawExam(x : Array<any>){
      this.viewExam.MakeOnlineExam(x);
      console.log(x)
      this.x.navigate(["LiveExam"]);
  }
}
