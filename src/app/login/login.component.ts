
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { setTheme } from 'ngx-bootstrap/utils';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  flag = true ;
  user = {
    name: "auther",
    age:"45"
  }
  myform:FormGroup;


  constructor(private x :Router , private translateLogin: TranslateService) { 
  
    translateLogin.setDefaultLang('en');
    setTheme('bs4');  

    this.myform = new FormGroup({
        userName :new FormControl("",Validators.required),
        password :new FormControl("",Validators.required),
    });


  }


  ngOnInit(){
  $("#test").hide();
  }


  switchLanguage(){
    debugger;
    if (this.flag){
      this.translateLogin.use('ar');
      this.flag = !this.flag;
  }
    else{
      this.translateLogin.use('en');
      this.flag = !this.flag;
    }
  }


  onSubmit(){
    if(this.myform.status=="VALID"){
      this.x.navigate(["Home"])
    }
    
    else {
      $("#test").show();

    }
      
    }
  }
