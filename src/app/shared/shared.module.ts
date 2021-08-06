import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { IconTechnologyComponent } from './components/icon-technology/icon-technology.component';
import { IconSkillComponent } from './components/icon-skill/icon-skill.component';
import { TranslateLoader, TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { ModuleWithProviders } from '@angular/compiler/src/core';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [NavbarComponent, IconTechnologyComponent, IconSkillComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    },
    isolate : false,
  })],
  exports: [NavbarComponent, IconTechnologyComponent, IconSkillComponent, TranslateModule]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    }
  }
}
