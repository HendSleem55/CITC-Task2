import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { setTheme } from 'ngx-bootstrap/utils';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  flag = true ;
  user = {
    name: "auther",
    age:"45"
  }

  constructor(private x :Router , private translate: TranslateService) {
    translate.setDefaultLang('en');
    setTheme('bs4'); 
  }


  switchLanguage() {
    if (this.flag){
      this.translate.use('ar');
      this.flag = !this.flag;
      
    }

    else{
      this.translate.use('en');
      this.flag = !this.flag;
    }
  }
   

  ngOnInit() {
  }

  goQuestionPage()
  {
     this.x.navigate(["Questions"]);
     
  }
  goGenerateExam(){
    this.x.navigate(["GenerateExam"])

  }

  goOnlineExams(){
    this.x.navigate(["OnlineExams"])
  } 

  logout(){
    this.x.navigate([""])
  }

  goTohome(){
    this.x.navigate(["Home"])
  }
}
