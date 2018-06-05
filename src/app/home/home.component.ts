import { Component, OnInit } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { PathService } from '../path.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
       
  selectedUniversity = 0;
  selectedFaculty = 0;
  selectedYear = 0;
  
  title = 'app';
  Faculties = []
  StudyYears = [];

  uniname:string;
  FcName:string;
  StuYear:string;


  images:Array<any>;
  universities = [
    { id: 1, name: 'Cairo' },
    { id: 2, name: 'Mansoura' },
    { id: 3, name: 'Helwan' }
  ];

  Faculty = [
    { id: 1, university_id: 1, name: 'FCIS' },
    { id: 2, university_id: 1, name: 'Engineering' },
    { id: 3, university_id: 2, name: 'Medicine' },
    { id: 4, university_id: 2, name: 'Science' },
    { id: 5, university_id: 3, name: 'Commerce' },
    { id: 6, university_id: 3, name: 'Literature' },
  ]


  Years = [
    { id: 1, faculty_id: 1, name: '2010' },
    { id: 2, faculty_id: 1, name: '2011' },
    { id: 3, faculty_id: 1, name: '2012' },
    { id: 4, faculty_id: 1, name: '2013' },
    { id: 5, faculty_id: 2, name: '2012' },
    { id: 6, faculty_id: 2, name: '2013' },
    { id: 7, faculty_id: 2, name: '2014' },
    { id: 8, faculty_id: 2, name: '2015' },
    { id: 9, faculty_id: 3, name: '2013' },
    { id: 10, faculty_id: 3, name: '2014' },
    { id: 11, faculty_id: 3, name: '2015' },
    { id: 12, faculty_id: 4, name: '2016' },
    { id: 13, faculty_id: 4, name: '2017' },
    { id: 14, faculty_id: 5, name: '2010' },
    { id: 15, faculty_id: 5, name: '2013' },
    { id: 16, faculty_id: 5, name: '2017' },
    { id: 17, faculty_id: 6, name: '2015' },
    { id: 18, faculty_id: 6, name: '2010' },
  ];



  constructor(private x :Router , private path :PathService) {
      

   }

  
  ngOnInit() {
    this.images=["./assets/imgs/bg2.jpg","./assets/imgs/bg4.jpg","./assets/imgs/bg5.jpg","./assets/imgs/bg6.jpg"],
    $(".Filter").hide();

  }

  showYears(){
    $(".Filter").show();
  }  
  
  
  hideYears(){
    $(".Filter").hide();
  }

  onSelectUniversty(university_id:number) {
    this.selectedUniversity = university_id;


   //fetching uni name
    let temp = (Number(university_id))-1;
    this.uniname = this.universities[temp].name;
    console.log(this.uniname);



    this.selectedFaculty = 0;
    this.StudyYears = [];
    this.Faculties = this.getFaculties().filter((item) => {
      return item.university_id === Number(university_id)
    });
  }



  
 
  onSelectFaculty(faculty_id: number) {
    let temp = (Number(faculty_id))-1;
    this.FcName = this.Faculty[temp].name;
    console.log(this.FcName)

    this.selectedFaculty = faculty_id;
    this.StudyYears = this.StudyYear().filter((item) => {
      return item.faculty_id === Number(faculty_id)
    });
  }
 
  onSelectYear(Year_id: number){
  this.StuYear = this.Years[Number(Year_id)-1].name;


  }




  getUniversities() {
    return this.universities
  }
 
  getFaculties() {
    return this.Faculty;
  }
 
  StudyYear() {
    return this.Years;
  }

  gotoquestion(){
    this.x.navigate(['Questions'])
  }

  StudyYearsExams(){
    this.path.setPath(this.uniname,this.FcName,this.StuYear);

    this.x.navigate(["StudyYearsExams"])

  }





}


