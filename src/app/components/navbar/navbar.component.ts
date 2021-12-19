import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { APP_COLOR_THEMES } from 'src/app/constants/app.color-theme.constants';
import { UtilsService } from 'src/app/core/services/utils/utils.service';

declare const $: any;
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('collapseToggler') collapseToggler: HTMLElement | undefined;

  _openSettings: boolean = false;

  isMobile: boolean = false;
  isDarkMode: boolean = false;

  constructor(
    public _utilsService: UtilsService) {}

  ngOnInit(): void {
    this.isMobile = this._utilsService.isMobileDevice();
    this.isDarkMode = this._utilsService.isDarkMode;
  }

  @HostListener('document:click', ['$event'])
  clickFloatingSettings(event: any): void {
    this.actionFloatingSettings(event);
  }

  touchFloatingSettings(): void {
    if (this.isMobile) {
      this._openSettings = !this._openSettings;
    }
    return;
  }

  actionFloatingSettings(event: any): void {
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

  togglerDarkModeHiddenButton(): void {
    this.isDarkMode = !this.isDarkMode;
    $('#chk')?.click();

    if (this.isMobile) {
      this._utilsService.togglerDarkMode();
    }
  }
}
