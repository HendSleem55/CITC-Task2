import { Injectable } from '@angular/core';
import { QuestionService } from './question.service';
import { SaveExamService } from './save-exam.service';

@Injectable({
  providedIn: 'root'
})
export class GenerateExamService {
  questionstogenerate:Array<any>;
  SampleOfQuestions:Array<any>;

  constructor( private questionService :QuestionService , private examService :SaveExamService) { }

  getExam(){
    this.questionstogenerate = this.questionService.getAllquestions();
    this.shuffle();
    return this.SampleOfQuestions;
  }

  shuffle() {
    var currentIndex = this.questionstogenerate.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = this.questionstogenerate[currentIndex];
          this.questionstogenerate[currentIndex] = this.questionstogenerate[randomIndex];
          this.questionstogenerate[randomIndex] = temporaryValue;
        }
        this.SampleOfQuestions = this.questionstogenerate.slice(0,10);  
   }

   saveExam(){
    this.examService.addNewExam(this.SampleOfQuestions);
 }

}
