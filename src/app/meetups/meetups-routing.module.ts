import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphqlThrowdownComponent } from 'app/meetups/graphql-throwdown/graphql-throwdown.component';
import { HttpAndObservablesComponent } from 'app/meetups/http-and-observables/http-and-observables.component';
import { Angular4BakedComponent } from 'app/meetups/angular4-baked/angular4-baked.component';
import { Angular2BackToWorkComponent } from 'app/meetups/angular2-back-to-work/angular2-back-to-work.component';
import { MeetupsComponent } from 'app/meetups/meetups.component';

const routes: Routes = [{
  path: 'meetups',
  component: MeetupsComponent,
  children: [
    { path: '', pathMatch: 'full', redirectTo: 'graphql-throwdown', },
    { path: 'graphql-throwdown', component: GraphqlThrowdownComponent },
    { path: 'http-and-observables', component: HttpAndObservablesComponent },
    { path: 'angular4-baked', component: Angular4BakedComponent },
    { path: 'angular2-back-to-work', component: Angular2BackToWorkComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class MeetupsRoutingModule { }
