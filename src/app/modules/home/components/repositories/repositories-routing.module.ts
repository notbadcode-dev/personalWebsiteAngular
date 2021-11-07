import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RepositoriesComponent } from './repositories.component';

const ROUTES: Routes = [{ path: '', component: RepositoriesComponent }];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class RepositoriesRoutingModule { }
