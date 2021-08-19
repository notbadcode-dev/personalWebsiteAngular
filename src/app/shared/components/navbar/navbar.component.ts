import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { APP_ROUTES } from 'src/app/constants/app.routes.constant';
import { APP_LANGUAGE_CODES } from 'src/app/constants/app.languages.constants';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('collapseToggler') collapseToggler: HTMLElement | undefined;

  activeRoute: string = APP_ROUTES.me;
  activeLanguageCode: string = this.translateService.getDefaultLang();
  isDarkMode: boolean =  false;

  appRoutes = APP_ROUTES;
  applanguageCodes = APP_LANGUAGE_CODES;

  constructor(
    public router: Router,
    public translateService: TranslateService) {}

  ngOnInit(): void {
  }

  changeLanguage(languageCode: string): void {
    this.translateService.setDefaultLang(languageCode);
    this.activeLanguageCode = this.translateService.getDefaultLang();
  }

  isActiveLanguageFromCode(languageCode: string): boolean {
    return languageCode === this.translateService.getDefaultLang();
  }

  navegate(newRoute: string): void {
    this.activeRoute = newRoute;
    this.router.navigate([newRoute]);
  }

  togglerDarkMode(): void {
    document.body.classList.toggle("dark-mode");
    this.isDarkMode = document.body.classList.contains('dark-mode');
  }
}
