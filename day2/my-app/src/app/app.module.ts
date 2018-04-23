import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// 使用ngModel必须引入FormsModule模块
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/app.header';
import { SearchComponent } from './components/search/app.search';
import { PannelComponent } from './components/pannel/app.pannel';


@NgModule({
  declarations: [
    AppComponent, HeaderComponent,SearchComponent,PannelComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
