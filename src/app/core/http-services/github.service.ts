import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { APP_URLS } from 'src/app/constants/app.urls.constant';
import { Repository, RepositoryHelper, RepositoryLanguage, RepositoryLanguageHelper } from 'src/app/shared/models/repositories.model';

const BASE_GITHUB: string = APP_URLS.REPOSITORIES.BASE;
const ENDPOINTS = {
  REPOSITORIES: `${BASE_GITHUB}/repos`,
};

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getRepositories(): Observable<Repository[]> {
    return this.http
      .get(`${ENDPOINTS.REPOSITORIES}?type=owner&per_page=100`, this.getOptions())
      .pipe(map((response: any) => RepositoryHelper.mapRepositoryList(response)));
  }

  getRepositoryLanguages(endpoint: string): Observable<RepositoryLanguage[]> {
    return this.http
      .get(endpoint, this.getOptions())
      .pipe(map((response: any) => RepositoryLanguageHelper.mapRepositoryLanguage(response)));
  }

  getOptions(): any {
    return {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      }
    };
  }
}
