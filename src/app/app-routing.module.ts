import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { APP_ROUTES } from './constants/app.routes.constant';

const routes: Routes = [
  { path: APP_ROUTES.me, loadChildren: () => import('./components/me/me.module').then(m => m.MeModule) },
  { path: APP_ROUTES.skills, loadChildren: () => import('./components/skills/skills.module').then(m => m.SkillsModule) },
  { path: APP_ROUTES.projects, loadChildren: () => import('./components/projects/projects.module').then(m => m.ProjectsModule) },
  { path: '', redirectTo: APP_ROUTES.me, pathMatch: 'full' },
  { path: '*', redirectTo: APP_ROUTES.me,  pathMatch: 'full' },
  { path: '**', redirectTo: APP_ROUTES.me, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
