import { Routes } from '@angular/router';
// import { DashBoardComponent } from './dash-board/dash-board.component';
import { UserComponent } from './user/user.component';

export const ROUTES: Routes = [
  // { path: 'user',      component: DashBoardComponent },
  {path: 'dash', loadChildren: 'app/dash-board/dash-board.module#DashBoardModule'},
  { path: '',  component: UserComponent },
  { path: '**',  component: UserComponent },
];
