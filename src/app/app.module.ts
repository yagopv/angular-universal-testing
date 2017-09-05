import { HomeComponent } from './components/home.component';
import { AboutComponent } from './components/about.component';
import { AppRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule.withServerTransition({appId: 'my-app'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
