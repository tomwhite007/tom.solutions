import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphqlThrowdownComponent } from './graphql-throwdown/graphql-throwdown.component';
import { HttpAndObservablesComponent } from './http-and-observables/http-and-observables.component';
import { Angular4BakedComponent } from './angular4-baked/angular4-baked.component';
import { Angular2BackToWorkComponent } from './angular2-back-to-work/angular2-back-to-work.component';
import { MeetupsComponent } from './meetups.component';
import { AngularStateAndNgrxComponent } from './angular-state-and-ngrx/angular-state-and-ngrx.component';

const routes: Routes = [{
  path: 'meetups',
  component: MeetupsComponent,
  children: [
    { path: '', pathMatch: 'full', redirectTo: 'angular-state-and-ngrx', },
    { path: 'angular-state-and-ngrx', component: AngularStateAndNgrxComponent },
    { path: 'graphql-throwdown', component: GraphqlThrowdownComponent },
    { path: 'http-and-observables', component: HttpAndObservablesComponent },
    { path: 'angular4-baked', component: Angular4BakedComponent },
    { path: 'angular2-back-to-work', component: Angular2BackToWorkComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'angular-state-and-ngrx' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class MeetupsRoutingModule { }
