import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksRoutingModule } from './links-routing.module';
import { LinksComponent } from './links.component';

@NgModule({
  imports: [
    CommonModule,
    LinksRoutingModule
  ],
  declarations: [LinksComponent]
})
export class LinksModule { }
