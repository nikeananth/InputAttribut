import { Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { UserComponent } from './user/user.component';

export const ROUTES: Routes = [
  { path: '',      component: DashBoardComponent },
  { path: 'user',  component: UserComponent },
];
