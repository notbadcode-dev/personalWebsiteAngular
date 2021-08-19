import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeRoutingModule } from './me-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { MeComponent } from './me.component';

@NgModule({
  declarations: [MeComponent],
  imports: [
    CommonModule,
    MeRoutingModule,

    SharedModule,
  ],
  exports: [MeComponent]
})
export class MeModule {}
