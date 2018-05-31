import { Component, OnInit } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { TranslateService } from '@ngx-translate/core';
import { Question } from '../Question.modle';
import * as $ from 'jquery';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})

export class TestComponent {


  images: Array<string>;

  constructor(private _http: HttpClient) {}

  ngOnInit() {
  }
}
//   country_id = 3
//   selectedCountry = 0;
//   selectedState = 0;
 
//   title = 'app';
//   states = []
//   cities = [];
 
 
//   onSelectCountry(event) {
//     // console.log(event)
//     debugger;
//     this.selectedCountry = this.country_id;
//     this.selectedState = 0;
//     this.cities = [];
//     this.states = this.getStates().filter((item) => {
//       return item.country_id === Number(this.country_id)
//     });
//   }
 
//   onSelectState(state_id: number) {
//     this.selectedState = state_id;
//     this.cities = this.getCity().filter((item) => {
//       return item.state_id === Number(state_id)
//     });
//   }
 
//   getCountries() {
//     return [
//       { id: 1, name: 'India' },
//       { id: 2, name: 'USA' },
//       { id: 3, name: 'Australia' }
//     ];
//   }
 
//   getStates() {
//     return [
//       { id: 1, country_id: 1, name: 'Andhra Pradesh' },
//       { id: 2, country_id: 1, name: 'Madhya Pradesh' },
//       { id: 3, country_id: 2, name: 'San Francisco' },
//       { id: 4, country_id: 2, name: 'Los Angeles' },
//       { id: 5, country_id: 3, name: 'New South Wales' },
//       { id: 6, country_id: 3, name: 'Victoria' },
//     ]
//   }
 
//   getCity() {
//     return [
//       { id: 1, state_id: 1, name: 'Guntur' },
//       { id: 2, state_id: 1, name: 'Vijayawada' },
//       { id: 3, state_id: 1, name: 'Nellore' },
//       { id: 4, state_id: 1, name: 'Kadapa' },
//       { id: 5, state_id: 2, name: 'Warangal' },
//       { id: 6, state_id: 2, name: 'Hyderabad' },
//       { id: 7, state_id: 2, name: 'Karimnagar' },
//       { id: 8, state_id: 2, name: 'Kadapa' },
//       { id: 9, state_id: 3, name: 'SOMA' },
//       { id: 10, state_id: 3, name: 'Richmond' },
//       { id: 11, state_id: 3, name: 'Sunset' },
//       { id: 12, state_id: 4, name: 'Burbank' },
//       { id: 13, state_id: 4, name: 'Hollywood' },
//       { id: 14, state_id: 5, name: 'Sunset' },
//       { id: 15, state_id: 5, name: 'Burbank' },
//       { id: 16, state_id: 5, name: 'Hollywood' },
//       { id: 17, state_id: 6, name: 'Benalla' },
//       { id: 18, state_id: 6, name: 'Melbourne' },
//     ]
//   }
// }
