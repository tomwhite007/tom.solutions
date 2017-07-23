import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PreviousMeetupsComponent } from './previous-meetups/previous-meetups.component';
import { LinksComponent } from 'app/links/links.component';
import { MeetupsModule } from 'app/meetups/meetups.module';
import { AboutComponent } from "app/about/about.component";

@NgModule({
  declarations: [
    AppComponent,
    PreviousMeetupsComponent,
    LinksComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MeetupsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
