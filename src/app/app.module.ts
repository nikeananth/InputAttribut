import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { DashBoardModule } from './dash-board/dash-board.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TitleComponent } from './title/title.component';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TitleComponent,
    UserComponent
  ],
  imports: [
   BrowserModule,
    RouterModule.forRoot(ROUTES),
   // DashBoardModule,
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule {

  constructor() {
    console.log('appmodule');
  }
}

