import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SaveExamService {
 AllExams : Array<any>=[];
 i : number = 0;
  constructor(private x :Router) { }
   addNewExam(exam){
    console.log(exam);
    this.i++;
    this.AllExams.push({value:this.i , theExam:exam});
    console.log(this.AllExams);
  }

  getExams(){
    return this.AllExams;
  }
}
