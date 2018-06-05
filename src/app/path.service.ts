import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PathService {
  path = { universtity :"",
          faculty:"",
          studyYear :""
        }

  constructor() { }

  setPath(uni:string , fac:string , year:string ){
    this.path.universtity = uni;
    this.path.faculty = fac ; 
    this.path.studyYear = year;
  }


  getPath(){
    return this.path;
  }





}
