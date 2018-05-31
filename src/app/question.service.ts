import { Injectable } from '@angular/core';
import { Question } from './Question.modle';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questions:Array<any>;

  constructor() { 
    this.questions = [
      {questionHeader : " first question header", answer1: "first answer" , answer2: "second answer" , answer3:"third answer" , correctanswer: "1" },
      {questionHeader : " 2 question header", answer1: "first answer" , answer2: "second answer" , answer3:"third answer" , correctanswer: "1" },
      {questionHeader : " 3 question header", answer1: "first answer" , answer2: "second answer" , answer3:"third answer" , correctanswer: "1" },
      {questionHeader : " 4 question header", answer1: "first answer" , answer2: "second answer" , answer3:"third answer" , correctanswer: "1" },
      {questionHeader : " 5 question header", answer1: "first answer" , answer2: "second answer" , answer3:"third answer" , correctanswer: "1" },
      {questionHeader : " 6 question header", answer1: "first answer" , answer2: "second answer" , answer3:"third answer" , correctanswer: "1" },
      {questionHeader : " 7 question header", answer1: "first answer" , answer2: "second answer" , answer3:"third answer" , correctanswer: "1" },
      {questionHeader : " 8 question header", answer1: "first answer" , answer2: "second answer" , answer3:"third answer" , correctanswer: "1" },
      {questionHeader : " 9 question header", answer1: "first answer" , answer2: "second answer" , answer3:"third answer" , correctanswer: "1" },
      {questionHeader : " 10 question header", answer1: "first answer" , answer2: "second answer" , answer3:"third answer" , correctanswer: "1" },
      {questionHeader : " 11 question header", answer1: "first answer" , answer2: "second answer" , answer3:"third answer" , correctanswer: "1" },
      {questionHeader : " 12 question header", answer1: "first answer" , answer2: "second answer" , answer3:"third answer" , correctanswer: "1" },
      {questionHeader : " 13 question header", answer1: "first answer" , answer2: "second answer" , answer3:"third answer" , correctanswer: "1" },
      {questionHeader : " 14 question header", answer1: "first answer" , answer2: "second answer" , answer3:"third answer" , correctanswer: "1" },
      {questionHeader : " 15 question header", answer1: "first answer" , answer2: "second answer" , answer3:"third answer" , correctanswer: "1" },
      {questionHeader : " 16 question header", answer1: "first answer" , answer2: "second answer" , answer3:"third answer" , correctanswer: "1" },
      {questionHeader : " 17 question header", answer1: "first answer" , answer2: "second answer" , answer3:"third answer" , correctanswer: "1" },
      {questionHeader : " 18 question header", answer1: "first answer" , answer2: "second answer" , answer3:"third answer" , correctanswer: "1" }
    ]
  }

  getAllquestions (){
    return this.questions ; 
  }

  addQuestion(q:Question ){
    this.questions.unshift(q);
  }
}
