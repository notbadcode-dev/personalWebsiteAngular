import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { APP_COLOR_THEMES } from './constants/app.color-theme.constants';
import { AnalyticsService } from './core/services/analytics/analytics.service';
import { UtilsService } from './core/services/utils/utils.service';

declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public _translateService: TranslateService,
    private router: Router,
    private utilsService: UtilsService,
    private analyticsService: AnalyticsService
    ) {
    this.autoDetectDarkMode();
    // this.setDefaultLanguge();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.analyticsService.routeTraking(event);
      }
    });

    this.utilsService.initTooltips();
  }

  setDefaultLanguge() {
    this._translateService.addLangs(['en', 'es']);
    this._translateService.setDefaultLang('es');
  }
  
  autoDetectDarkMode() {
    let themeColor = document.querySelector('[name=theme-color]');
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.toggle("dark-mode");
      themeColor?.setAttribute('content', APP_COLOR_THEMES.DARK);
      this.utilsService.isDarkMode = true;
    } else {
      themeColor?.setAttribute('content', APP_COLOR_THEMES.LIGHT);
    }
  }
}
