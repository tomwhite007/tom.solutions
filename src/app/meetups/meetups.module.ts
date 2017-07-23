import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetupsRoutingModule } from './meetups-routing.module';
import { MeetupsComponent } from './meetups.component';
import { GraphqlThrowdownComponent } from './graphql-throwdown/graphql-throwdown.component';
import { Angular4BakedComponent } from './angular4-baked/angular4-baked.component';
import { HttpAndObservablesComponent } from './http-and-observables/http-and-observables.component';
import { Angular2BackToWorkComponent } from './angular2-back-to-work/angular2-back-to-work.component';

@NgModule({
  imports: [
    CommonModule,
    MeetupsRoutingModule
  ],
  declarations: [
    MeetupsComponent,
    GraphqlThrowdownComponent,
    Angular4BakedComponent,
    HttpAndObservablesComponent,
    Angular2BackToWorkComponent
  ]
})
export class MeetupsModule { }
