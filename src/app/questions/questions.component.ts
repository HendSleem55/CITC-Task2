import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {QuestionService} from '../question.service'

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  questions : Array <any>;
  constructor(private x : Router , private questionService :QuestionService) { }

  ngOnInit() {
    this.questions = this.questionService.getAllquestions()
  }

  CreateQuestionForm(){
    this.x.navigate(["NewQuestionForm"])
  }


  deleteFun($id){
    this.questions.splice($id,1)
  }
}
 