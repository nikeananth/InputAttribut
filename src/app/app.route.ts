import { Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { UserComponent } from './user/user.component';

export const ROUTES: Routes = [
  // { path: 'user',      component: DashBoardComponent },
  { path: '',  component: UserComponent },
  { path: '**',  component: UserComponent },
];
