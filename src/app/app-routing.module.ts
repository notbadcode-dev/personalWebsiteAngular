import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { APP_ROUTES } from './constants/app.routes.constant';

const ROUTES: Routes = [
  { path: APP_ROUTES.HOME, loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) }
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
