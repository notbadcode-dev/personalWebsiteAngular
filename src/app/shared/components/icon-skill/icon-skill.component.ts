import { Component, Input, OnInit } from '@angular/core';
import { ESkillIdentifier, ESkillType } from 'src/app/shared/enums/skills.enum';
import { ISkill } from 'src/app/shared/interfaces/skills.interface';

@Component({
  selector: 'icon-skill',
  templateUrl: './icon-skill.component.html',
  styleUrls: ['./icon-skill.component.scss']
})
export class IconSkillComponent implements OnInit {

  @Input() _skill: ISkill | undefined;

  skillIdentifiers = ESkillIdentifier;

  constructor() { }

  ngOnInit(): void {
  }

}
