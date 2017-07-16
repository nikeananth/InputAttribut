/**
 * Created by nikea on 7/16/2017.
 */
import { Injectable } from '@angular/core'
import { DashBoard } from '../dash-board/shared/dash-board'
import { MOCK_DASH } from '../dash-board/shared/dash-mock'

@Injectable()
export class DashService {

  constructor() {
    console.log('DashService');
  }

  getDashData(): DashBoard [] {
    return MOCK_DASH;
  }
}
