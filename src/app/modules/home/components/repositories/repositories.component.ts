import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { APP_URLS } from 'src/app/constants/app.urls.constant';
import { GithubService } from 'src/app/core/http-services/github.service';
import { Repository, RepositoryLanguage } from 'src/app/shared/models/repositories.model';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit, OnDestroy {

  websiteUrl = APP_URLS.SITES.WEBSITE;
  repositoryLanguageList: RepositoryLanguage[] = [];

  repositoriesSuscription: Subscription | undefined;

  constructor(
    public _translateService: TranslateService,
    private _githubService: GithubService) { }

  ngOnInit(): void {
    this.getRepositories();
  }

  ngOnDestroy(): void {
    this.repositoriesSuscription?.unsubscribe();
  }

  getRepositories(): void {
    this.repositoriesSuscription = this._githubService.getRepositories()
      .subscribe((respositoryList: Repository[]) => {
        respositoryList.map(repository => {
          this.getRepositoryLanguages(repository);
          console.log(repository);
        });
      }, (error) => {
        this.repositoriesSuscription?.unsubscribe();
        if (error) {
          console.error(error);
        }
      });
  }

  getRepositoryLanguages(repository: Repository): void  {
    if (repository && repository?.languagesRepositoryUrl) {
      this.repositoriesSuscription = this._githubService.getRepositoryLanguages(repository.languagesRepositoryUrl)
      .subscribe((repositoryLanguageList: RepositoryLanguage[]) => {
        repository.languages = repositoryLanguageList;
      }, (error) => {
        this.repositoriesSuscription?.unsubscribe();
        if (error) {
          console.error(error);
        }
      });
    }
  }

}
