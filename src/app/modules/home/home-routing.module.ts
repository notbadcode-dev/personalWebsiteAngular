import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { APP_ROUTES } from 'src/app/constants/app.routes.constant';

import { HomeComponent } from './home.component';

const ROUTES: Routes = [{ 
    path: APP_ROUTES.HOME,
    component: HomeComponent,
     children: [
      { path: APP_ROUTES.SKILLS, loadChildren: () => import('./components/skills/skills.module').then(m => m.SkillsModule) },
      { path: APP_ROUTES.REPOSITORIES, loadChildren: () => import('./components/repositories/repositories.module').then(m => m.RepositoriesModule) },
      { path: '',   redirectTo: APP_ROUTES.SKILLS, pathMatch: 'full' }, 
     ]
  }];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
