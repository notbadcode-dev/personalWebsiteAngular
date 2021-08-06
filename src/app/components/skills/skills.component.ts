import { Component, OnInit } from '@angular/core';
import { ESkillIdentifier, ESkillType } from '../../shared/enums/skills.enum';
import { ISkill, ISkillGroup } from '../../shared/interfaces/skills.interface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillGrouplist: ISkillGroup[] = [];

  allSkillList: ISkill[] = [];

  basicSkillList: ISkill[] = [];
  languageskillList: ISkill[] = [];
  frameworkSkillList: ISkill[] = [];
  databaseSkillList: ISkill[] = [];
  environmentSkillList: ISkill[] = [];

  skillIdentifier = ESkillIdentifier;

  constructor() {}

  ngOnInit(): void {
    this.initSkills();
  }

  initSkills() {
    this.basicSkillList = [
      { id: ESkillIdentifier.html, title: 'HTML5', type: ESkillType.basic },
      { id: ESkillIdentifier.css3, title: 'CSS3', type: ESkillType.basic },
      { id: ESkillIdentifier.javascript, title: 'JavaScript', type: ESkillType.basic },
    ];
  
    this.languageskillList = [
      { id: ESkillIdentifier.typescript, title: 'TypeScript', type: ESkillType.language },
      { id: ESkillIdentifier.java, title: 'Java', type: ESkillType.language },
      { id: ESkillIdentifier.php, title: 'PHP', type: ESkillType.language },
    ];
  
    this.frameworkSkillList = [
      { id: ESkillIdentifier.angular, title: 'Angular', type: ESkillType.framework },
      { id: ESkillIdentifier.vuejs, title: 'VueJS', type: ESkillType.framework },
      { id: ESkillIdentifier.expressjs, title: 'ExpressJS', type: ESkillType.framework},
      { id: ESkillIdentifier.boostrap, title: 'Bootstrap', type: ESkillType.framework},
    ];
  
    this.databaseSkillList = [
      { id: ESkillIdentifier.mongodb, title: 'Mongo DB', type: ESkillType.database },
      { id: ESkillIdentifier.mysql, title: 'MySQL', type: ESkillType.database },
    ];
  
    this.environmentSkillList = [
      { id: ESkillIdentifier.nodejs, title: 'Node JS', type: ESkillType.environment },
      { id: ESkillIdentifier.git, title: 'Git', type: ESkillType.environment },
      { id: ESkillIdentifier.gitflow, title: 'GitFlow', type: ESkillType.environment },
      { id: ESkillIdentifier.vscode, title: 'VS Code', type: ESkillType.environment },
      { id: ESkillIdentifier.scrum, title: 'Scrum', type: ESkillType.environment },
    ];

    this.skillGrouplist = [
      { title: 'Basics', skilllist: this.basicSkillList },
      { title: 'Techniques', skilllist: [...this.languageskillList, ...this.frameworkSkillList, ...this.databaseSkillList] },
      // { title: 'Frameworks', skilllist: this.frameworkSkillList },
      // { title: 'Databases', skilllist: this.databaseSkillList },
      { title: 'Environments', skilllist: this.environmentSkillList },
    ];

    this.allSkillList = [
      ...this.basicSkillList,
      ...this.languageskillList,
      ...this.frameworkSkillList,
      ...this.databaseSkillList,
      ...this.environmentSkillList
    ]
  }

}
