import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoriesRoutingModule } from './repositories-routing.module';

import { RepositoriesComponent } from './repositories.component';
import { GithubService } from 'src/app/core/http-services/github.service';
import { TranslateModule } from '@ngx-translate/core';
import { PercentageLanguagesComponent } from './components/percentage-languages/percentage-languages.component';

@NgModule({
  declarations: [RepositoriesComponent, PercentageLanguagesComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    RepositoriesRoutingModule,
  ],
  exports: [RepositoriesComponent],
  providers: [GithubService]
})
export class RepositoriesModule { }
