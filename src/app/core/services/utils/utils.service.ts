import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DeviceDetectorService } from 'ngx-device-detector';

import { APP_COLOR_THEMES } from 'src/app/constants/app.color-theme.constants';
import { APP_LANGUAGE_CODES } from 'src/app/constants/app.languages.constants';

declare const $: any;

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  applanguageCodes = APP_LANGUAGE_CODES;

  isDarkMode: boolean =  false;
  activeLanguageCode: string = this._translateService.getDefaultLang();

  constructor(
    private _translateService: TranslateService,
    private deviceService: DeviceDetectorService
    ) { }

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

    isActiveLanguageFromCode(languageCode: string): boolean {
      return languageCode === this._translateService.getDefaultLang();
    }

    changeLanguage(languageCode: string): void {
      this._translateService.setDefaultLang(languageCode);
      this.activeLanguageCode = this._translateService.getDefaultLang();
    }

    initTooltips(): void {
      if (!this.isMobileDevice()) {
        $(function () {
          $('[data-toggle="tooltip"].bottom').tooltip({
            placement: 'bottom',
            template: ''
            + '<div class="tooltip" role="tooltip">'
                + '<div class="arrow"></div>'
                + '<div class="tooltip-inner"></div>'
            + '</div>',
          });
        });
      }
    }

    isMobileDevice(): boolean {
      return this.deviceService.isMobile() || this.deviceService.isTablet();
    }

    isTabletDevice(): boolean {
      return this.deviceService.isTablet();
    }

    isDesktopDevice(): boolean {
      return this.deviceService.isDesktop();
    }
}
