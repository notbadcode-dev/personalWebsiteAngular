import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { MeComponent } from './components/me/me.component';
import { NavbarComponent } from 'src/app/modules/home/components/navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HomeComponent, MeComponent, NavbarComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule.forChild(),
  ],
  exports: [HomeComponent, MeComponent, NavbarComponent]
})
export class HomeModule { }
