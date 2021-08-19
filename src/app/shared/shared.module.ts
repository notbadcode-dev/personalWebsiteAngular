import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { CommonModule } from '@angular/common';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { TooltipDirective } from './directives/tooltip.directive';

import { NavbarComponent } from './components/navbar/navbar.component';
import { IconTechnologyComponent } from './components/icon-technology/icon-technology.component';
import { IconSkillComponent } from './components/icon-skill/icon-skill.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [NavbarComponent, IconTechnologyComponent, IconSkillComponent, TooltipDirective],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    },
    isolate : false,
  }), ],
  exports: [NavbarComponent, IconTechnologyComponent, IconSkillComponent, TranslateModule, TooltipDirective]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    }
  }
}
