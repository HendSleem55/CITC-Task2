import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {QuestionService} from '../question.service'
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  questions : Array <any>;
  modalRef: BsModalRef;
  id :number;
  constructor(private x : Router , private questionService :QuestionService ,private modalService: BsModalService) { }

  ngOnInit() {
    this.questions = this.questionService.getAllquestions()
  }

  CreateQuestionForm(){
    this.x.navigate(["NewQuestionForm"])
  }


  // deleteFun($id){
  //   // this.questions.splice($id,1)
  // }

  

  openModal(template: TemplateRef<any> , $id) {
    this.modalRef = this.modalService.show(template);
    this.id = $id;

  }
 
 
   confirm(): void {
    this.questions.splice(this.id,1);
    this.modalRef.hide();


  }
 
 
  decline(): void {
    this.modalRef.hide();
  }
}
 