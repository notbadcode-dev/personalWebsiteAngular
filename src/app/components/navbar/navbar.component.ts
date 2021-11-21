import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { UtilsService } from 'src/app/core/services/utils/utils.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('collapseToggler') collapseToggler: HTMLElement | undefined;

  _openSettings: boolean = false;

  constructor(
    public _utilsService: UtilsService) {}

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

}
