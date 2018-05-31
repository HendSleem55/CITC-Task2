import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {QuestionService} from '../question.service';
import { GenerateExamService } from '../generate-exam.service';
import * as $ from 'jquery';




@Component({
  selector: 'app-generate-exam',
  templateUrl: './generate-exam.component.html',
  styleUrls: ['./generate-exam.component.scss']
})
export class GenerateExamComponent implements OnInit {
  SampleOfQuestions : Array <any>;
  questionstogenerate :Array <any>;
  constructor(private x : Router,  private generateExam : GenerateExamService) {}
   
  ngOnInit() {
    $("#test").hide();
    $(".subitbutton").hide();

  }

  generateexam(){
    this.questionstogenerate  = this.generateExam.getExam();   
    $("#test").hide();
    $(".subitbutton").show();


    console.log("ay 7aga" ,this.questionstogenerate);
  }

  submitExam(){
    this.generateExam.saveExam()
    this.questionstogenerate=[];
    $("#test").show();
    $(".subitbutton").hide();



  }
      

}
