import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinksComponent } from 'app/links/links.component';
import { ContactComponent } from 'app/contact/contact.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'meetups', },
  { path: 'links', component: LinksComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
