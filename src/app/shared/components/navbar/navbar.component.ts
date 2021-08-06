import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { APP_ROUTES } from 'src/app/constants/app.routes.constant';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('collapseToggler') collapseToggler: HTMLElement | undefined;

  appRoutes = APP_ROUTES;
  activeRoute: string = APP_ROUTES.me;

  isDarkMode: boolean =  false;

  constructor(
    public router: Router,
    public translateService: TranslateService) {}

  ngOnInit(): void {
  }

  navegate(newRoute: string) {
    this.activeRoute = newRoute;
    this.router.navigate([newRoute]);
  }

  togglerDarkMode() {
    document.body.classList.toggle("dark-mode");
    this.isDarkMode = document.body.classList.contains('dark-mode');
  }
}
