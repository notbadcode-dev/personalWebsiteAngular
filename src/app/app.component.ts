import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public translate: TranslateService) {

    this.setDefaultLanguge();
    this.autoDetectLanguage();
    this.autoDetectDarkMode();
  }

  setDefaultLanguge() {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('en');
  }

  autoDetectLanguage() {
    this.translate.use(this.translate.getBrowserLang().match(/en|es/) ? this.translate.getBrowserLang() : 'en');
  }

  autoDetectDarkMode() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.toggle("dark-mode");
    }
    
  }
}
