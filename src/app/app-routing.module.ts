import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinksComponent } from 'app/links/links.component';
import { AboutComponent } from "app/about/about.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'meetups' },
  { path: 'links', component: LinksComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'meetups' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
