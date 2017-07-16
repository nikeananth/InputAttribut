import { Component, OnInit } from '@angular/core';
import {  DashBoard } from './shared/dash-board';
import { DashService } from '../common/Dash.Service'


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  dashboardList: DashBoard [];
  constructor(private dashService: DashService) {
    console.log('dashcomponent');
  }

  ngOnInit() {
    this.dashboardList = this.dashService.getDashData();
  }

}
