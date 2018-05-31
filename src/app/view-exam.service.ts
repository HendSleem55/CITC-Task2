import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewExamService {
  OnlineExam : Array<any>;
  constructor() { }

  MakeOnlineExam(examservice:Array<any>){
   this.OnlineExam = examservice;
  }

  drawOnlineExam(){
    return this.OnlineExam;
  }

  
}
