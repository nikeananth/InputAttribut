import { Component, OnInit } from '@angular/core';
import {  MOCK_DASH } from './shared/dash-mock';
import {  DashBoard } from './shared/dash-board';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  dashboardList: DashBoard [];
  constructor() {
    console.log('dashcomponent');
  }

  ngOnInit() {
    this.dashboardList = MOCK_DASH;
  }

}
