import { Component, OnInit } from '@angular/core';
import { APP_URLS } from 'src/app/constants/app.urls.constant';

import { ETechnologyType } from 'src/app/shared/enums/projects.enum';

import { IProject, ITechnology } from 'src/app/shared/interfaces/projects.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  websiteUrl = APP_URLS.sites.website;
  projectList: IProject[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initProjects();
  }

  initProjects(): void {
    this.projectList = [
      {
        id: 1,
        title: 'Personal Website',
        description: "Personal website build with Angular. It's this same site",
        siteUrl: APP_URLS.sites.website,
        repositoryUrl: APP_URLS.repositories.website,
        technologyList: [
          this.getTechnologiInfo(ETechnologyType.angular),
          this.getTechnologiInfo(ETechnologyType.bootstrap),
        ]
      }, { 
        id: 2,
        title: 'Api',
        description: 'Api build with ExpressJS powered by NodeJS',
        siteUrl: APP_URLS.sites.api,
        repositoryUrl: APP_URLS.repositories.api,
        technologyList: [
          this.getTechnologiInfo(ETechnologyType.nodeJS),
          this.getTechnologiInfo(ETechnologyType.expressJS),
          this.getTechnologiInfo(ETechnologyType.mongoDB),
          this.getTechnologiInfo(ETechnologyType.javascript),
        ]
      }, {
        id: 3,
        title: 'Quirk Colors',
        description: 'Web app build with Angular and Material Angular. User for manage palette colors.',
        siteUrl: APP_URLS.sites.quirkColors,
        repositoryUrl: APP_URLS.repositories.quirkColors,
        technologyList: [
          this.getTechnologiInfo(ETechnologyType.angular),
          this.getTechnologiInfo(ETechnologyType.materialAngular),
        ]
      }
    ];

    this.projectList = [...this.projectList, ...[{
      id: this.projectList.length + 1,
      title: 'More Coming soon',
      technologyList: [],
    }]]

  };

  getTechnologiInfo(technologyType: ETechnologyType): ITechnology {

    const technology: ITechnology = {
      title: '',
      source: APP_URLS.assets.svg,
      type: technologyType,
    } 

    switch (technologyType) {
      case ETechnologyType.nodeJS:
        technology.title = 'Node JS';
        technology.source += 'nodejs.svg';
        break;
      case ETechnologyType.expressJS:
        technology.title = 'Express JS';
        technology.source += 'expressjs.svg';
        break;
      case ETechnologyType.mongoDB:
        technology.title = 'Mongo DB';
        technology.source += 'mongodb.svg';
        break;
      case ETechnologyType.angular:
        technology.title = 'Angular';
        technology.source += 'angular.svg';
        break;
      case ETechnologyType.materialAngular:
        technology.title = 'Material Angular';
        technology.source += 'material_angular.svg';
        break;
      case ETechnologyType.bootstrap:
        technology.title = 'Bootstrap';
        technology.source += 'bootstrap4.svg';
        break;
      case ETechnologyType.javascript:
        technology.title = 'Javascript';
        technology.source += 'javascript.svg';
        break;
      case ETechnologyType.typescript:
        technology.title = 'Typescript';
        technology.source += 'typescript.svg';
        break;
    
      default:
        break;
    }

    return technology;
  }

  getSyleForTechnolgyList(technologyIndex: number, technologyListLength: number): any {
    return {
      position: 'relative',
      left: '-' + technologyIndex * 1,
      ['z-index']:  technologyListLength - (technologyIndex * -1)
    };

    // return `left: ${technologyIndex * -6}; z-index: ${technologyListLength - (technologyIndex + 1)}`
  }


}
