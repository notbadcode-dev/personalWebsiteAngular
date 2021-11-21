import { AfterContentChecked, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { RepositoryLanguage } from 'src/app/shared/models/repositories.model';

@Component({
  selector: 'percentage-languages',
  templateUrl: './percentage-languages.component.html',
  styleUrls: ['./percentage-languages.component.scss']
})
export class PercentageLanguagesComponent implements OnInit {

  @Input() set languageList(_languageList: RepositoryLanguage[]) {
    this._languageList = _languageList.filter(_l => typeof _l !== 'string');

    if (_languageList.length > 0) {
      this.maxPercentageLanguage = Math.max.apply(Math, this._languageList.map(function(o) { return o.percentageTransform ?? 0; }));
      this.mainLanguageName = this._languageList.find(lang => lang.percentageTransform === this.maxPercentageLanguage)?.name ?? '';
    }
  };

  _languageList: RepositoryLanguage[] = [];

  mainLanguageName: string = '';
  maxPercentageLanguage: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.maxPercentageLanguage = Math.max.apply(Math, this._languageList.map(function(o) { return o.percentageTransform ?? 0; }));
    this.mainLanguageName = this._languageList.find(lang => lang.percentageTransform === this.maxPercentageLanguage)?.name ?? '';
  }

}
