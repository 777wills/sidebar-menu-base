import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderModule } from 'src/app/components/header/header.component';
import { SideMenuModule } from 'src/app/components/side-menu/side-menu.component';


@NgModule({
  declarations: [ HomeComponent ],
  exports: [ HomeComponent ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    SideMenuModule
  ]
})
export class HomeModule { }
