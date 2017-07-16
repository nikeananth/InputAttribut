
/**
 * Created by nikea on 7/15/2017.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashBoardComponent } from './dash-board.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './dash.route';

@NgModule({
  declarations: [
    DashBoardComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(ROUTES)
  ],
  exports : [ RouterModule ],
  providers : []
})
export class DashBoardModule {

  constructor() {
    console.log('DashModule');
  }
}

