import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { APP_ROUTES } from 'src/app/constants/app.routes.constant';
import { APP_LANGUAGE_CODES } from 'src/app/constants/app.languages.constants';
import { APP_COLOR_THEMES } from 'src/app/constants/app.color-theme.constants';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('collapseToggler') collapseToggler: HTMLElement | undefined;

  _openSettings: boolean = false;

  activeRoute: string = APP_ROUTES.ME;
  activeLanguageCode: string = this.translateService.getDefaultLang();
  isDarkMode: boolean =  false;

  appRoutes = APP_ROUTES;
  applanguageCodes = APP_LANGUAGE_CODES;

  constructor(
    public router: Router,
    public translateService: TranslateService) {}

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event'])
  clickOutsideFloatingSettings(event: any): void {
    const onOpenTrigger: boolean = [...event.target.classList].filter((c: any) => c === 'open__trigger').length > 0;
    const onFloatingContent = event.path.map((p: HTMLElement) => {
      if (p?.classList?.contains('floating__settings__content')) {
        return p;
      }
      return;
    }).filter((p: any) => p !== undefined).length > 0;

    if (!onFloatingContent) {
      this._openSettings = onOpenTrigger && !this._openSettings ? true : false;
    }
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
    let themeColor = document.querySelector('[name=theme-color]');

    if (this.isDarkMode) {
      themeColor?.setAttribute('content', APP_COLOR_THEMES.DARK);
    } else {
      themeColor?.setAttribute('content', APP_COLOR_THEMES.LIGHT);
    }
  }

}