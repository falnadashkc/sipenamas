import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PenelitianComponent } from './penelitian/penelitian.component';
import { PengabdianComponent } from './pengabdian/pengabdian.component';
import { FrameworkComponent } from './framework/framework.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PenelitianComponent,
    PengabdianComponent,
    FrameworkComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path: '',
      component: AppComponent,
    },
    {
      path: 'about',
      component: AboutComponent,
    },
    {
      path: 'penelitian',
      component: PenelitianComponent,
    },   
    {
      path: 'pengabdian',
      component: PengabdianComponent,
    }])
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
