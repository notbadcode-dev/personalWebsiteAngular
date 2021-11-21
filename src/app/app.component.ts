import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { APP_COLOR_THEMES } from './constants/app.color-theme.constants';
import { AnalyticsService } from './core/services/analytics/analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public translate: TranslateService,
    private router: Router,
    private analyticsService: AnalyticsService
    ) {

    this.setDefaultLanguge();
    this.autoDetectLanguage();
    this.autoDetectDarkMode();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.analyticsService.routeTraking(event);
      }
    });
  }

  setDefaultLanguge() {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('es');
  }

  autoDetectLanguage() {
    // this.translate.use(this.translate.getBrowserLang().match(/en|es/) ? this.translate.getBrowserLang() : 'en');
  }

  autoDetectDarkMode() {
    let themeColor = document.querySelector('[name=theme-color]');
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.toggle("dark-mode");
      themeColor?.setAttribute('content', APP_COLOR_THEMES.DARK);
    } else {
      themeColor?.setAttribute('content', APP_COLOR_THEMES.LIGHT);
    }
  }
}
