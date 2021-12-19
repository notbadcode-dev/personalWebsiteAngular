import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {

  tooltip = {
    openGithub: 'TOOLTIP.OPEN_GITHUB'
  };

  constructor(public translateService: TranslateService) { }

  ngOnInit(): void {}
}
