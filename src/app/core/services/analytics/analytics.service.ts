import { Injectable } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AnalyticsEvent } from './analytics.interface';

declare let gtag: Function;

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {

  constructor() {}

  public eventTracking(analyticsEvent: AnalyticsEvent) {
    gtag('event', analyticsEvent.eventName, {
      eventCategoty: analyticsEvent.eventCategory,
      eventLabel: analyticsEvent.eventLabel,
      eventAction: analyticsEvent.eventAction ?? null,
      eventValue: analyticsEvent.eventValue ?? null,
    });
  }

  public routeTraking(event: NavigationEnd) {
    if (environment.tagAnalytics !== undefined) {
      gtag('config', environment.tagAnalytics, {
        ['path_page']: event.urlAfterRedirects,
      });
    }
  }
}
