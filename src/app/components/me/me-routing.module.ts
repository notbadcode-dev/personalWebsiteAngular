import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MeComponent } from './me.component';

const ROUTES: Routes = [{ path: '', component: MeComponent }];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class MeRoutingModule { }
