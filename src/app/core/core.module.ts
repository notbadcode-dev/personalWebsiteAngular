import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { CommonModule } from '@angular/common';
import { UtilsService } from './services/utils/utils.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [UtilsService]
})

export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule
    }
  }
}
