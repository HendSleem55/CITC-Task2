import { Component, OnInit } from '@angular/core';
import { Question } from '../Question.modle';
import { NgForm , NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-new-question-form',
  templateUrl: './new-question-form.component.html',
  styleUrls: ['./new-question-form.component.scss']
})
export class NewQuestionFormComponent implements OnInit {

  myform:FormGroup;
  constructor(private x :Router , private questionService :QuestionService) { 
    this.myform = new FormGroup({
        question :new FormControl("",Validators.required),
        answer1 :new FormControl("",Validators.required),
        answer2 :new FormControl("",Validators.required),
        answer3 :new FormControl("",Validators.required),
        correctAnswer:new FormControl("",Validators.required)
    });

  }

  ngOnInit(){
    $("alert").hide();
  }

  onSubmit(){
    if(this.myform.status=="VALID"){
        let NewQ = new Question(this.myform.value.question ,this.myform.value.answer1,this.myform.value.answer2,this.myform.value.answer3,this.myform.value.correctAnswer);
        this.questionService.addQuestion(NewQ);
        this.x.navigate(["Questions"]);
    }
    
    else {
      $("alert").show();
    }
    
  }

 



}