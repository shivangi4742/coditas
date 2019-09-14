import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private apiservice: ApiService) { }

  ngOnInit() {

  }

  init(res) {
   // console.log(res);
  }

  onSearch(serachtxt) {
    console.log(serachtxt);
    // this.apiservice.addPr(serachtxt)
    // .then(res => this.init(res));
  }

}
