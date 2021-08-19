import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { SkillsComponent } from './skills.component';

@NgModule({
  declarations: [SkillsComponent],
  imports: [
    CommonModule,
    SkillsRoutingModule,

    SharedModule
  ],
  exports: [SkillsComponent]
})
export class SkillsModule { }
