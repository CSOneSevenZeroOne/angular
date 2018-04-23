import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// 使用ngModel必须引入FormsModule模块
import { FormsModule } from '@angular/forms';
// http模块
import { HttpModule } from '@angular/http';

//引入服务
import { DataService } from './services/app.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/app.header';
import { SearchComponent } from './components/search/app.search';
import { PannelComponent } from './components/pannel/app.pannel';
import { LoadingComponent } from './components/loading/app.loading';


@NgModule({
	//注册组件
  declarations: [
    AppComponent, HeaderComponent,SearchComponent,PannelComponent,LoadingComponent
  ],
  //注册模块 插件
  imports: [
    BrowserModule,FormsModule,HttpModule
  ],
  //注册服务 自定义的公共方法
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
