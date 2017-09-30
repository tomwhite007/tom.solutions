import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PreviousMeetupsComponent } from './previous-meetups/previous-meetups.component';
import { MeetupsModule } from './meetups/meetups.module';
import { LinksModule } from './links/links.module';
import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [
    AppComponent,
    PreviousMeetupsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MeetupsModule,
    LinksModule,
    AboutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
