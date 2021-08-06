import { Component, Input, OnInit } from '@angular/core';
import { ETechnologyType as ETypeTechnology } from 'src/app/shared/enums/projects.enum';
import { ITechnology } from '../../interfaces/projects.interface';

@Component({
  selector: 'icon-technology',
  templateUrl: './icon-technology.component.html',
  styleUrls: ['./icon-technology.component.scss']
})
export class IconTechnologyComponent implements OnInit {

  @Input() _technology: ITechnology | undefined;

  typeTechnology = ETypeTechnology;

  constructor() { }

  ngOnInit(): void { }

}
