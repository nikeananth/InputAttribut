/**
 * Created by nikea on 7/16/2017.
 */

/**
 * Created by nikea on 7/15/2017.
 */
import { NgModule } from '@angular/core';
import { DashService } from './Dash.Service'

@NgModule({
  providers : [DashService]
})
export class CommonModule1 {

  constructor() {
    console.log('commonModule');
  }
}
