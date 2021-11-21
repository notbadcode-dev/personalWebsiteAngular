import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { APP_COLOR_THEMES } from 'src/app/constants/app.color-theme.constants';
import { APP_LANGUAGE_CODES } from 'src/app/constants/app.languages.constants';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  applanguageCodes = APP_LANGUAGE_CODES;

  isDarkMode: boolean =  false;
  activeLanguageCode: string = this._translateService.getDefaultLang();

  constructor(
    private _translateService: TranslateService,
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

}
