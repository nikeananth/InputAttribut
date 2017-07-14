import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TitleComponent } from './title/title.component';
@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    SideBarComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule {

  constructor() {
    console.log('appmodule');
  }
}

