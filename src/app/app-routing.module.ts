import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { APP_ROUTES } from './constants/app.routes.constant';

const ROUTES: Routes = [
  { path: APP_ROUTES.SKILLS, loadChildren: () => import('./components/skills/skills.module').then(m => m.SkillsModule) },
  { path: APP_ROUTES.REPOSITORIES, loadChildren: () => import('./modules/repositories/repositories.module').then(m => m.RepositoriesModule) },
  { path: '',   redirectTo: APP_ROUTES.SKILLS, pathMatch: 'full' }, 
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
