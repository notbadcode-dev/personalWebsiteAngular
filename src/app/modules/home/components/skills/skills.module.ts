import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';

import { SkillsComponent } from './skills.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [SkillsComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    SkillsRoutingModule,
  ],
  exports: [SkillsComponent]
})
export class SkillsModule { }
