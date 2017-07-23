import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PreviousMeetupsComponent } from './previous-meetups/previous-meetups.component';
import { LinksComponent } from 'app/links/links.component';
import { ContactComponent } from 'app/contact/contact.component';
import { MeetupsModule } from 'app/meetups/meetups.module';

@NgModule({
  declarations: [
    AppComponent,
    PreviousMeetupsComponent,
    LinksComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MeetupsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
