import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import {LocationStrategy, HashLocationStrategy, LOCATION_INITIALIZED} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { HttpLoaderFactory, SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MeComponent } from './components/me/me.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MeComponent,
    NavbarComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: false
    }),
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [TranslateService, Injector],
      multi: true
    }
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function appInitializerFactory(translate: TranslateService, injector: Injector) {
  return () => new Promise<any>((resolve: any) => {
    const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
    locationInitialized.then(() => {
      const langToSet = 'es'
      translate.setDefaultLang('es');
      resolve(null);
      // translate.use(langToSet).subscribe(() => {
      //   console.info(`Successfully initialized '${langToSet}' language.'`);
      // }, error => {
      //   console.error(`Problem with '${langToSet}' language initialization.'`);
      // }, () => {
      //   resolve(null);
      // });
    });
  });
}
