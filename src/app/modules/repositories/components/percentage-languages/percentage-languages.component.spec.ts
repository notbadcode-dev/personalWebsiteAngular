import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageLanguagesComponent } from './percentage-languages.component';

describe('PercentageLanguagesComponent', () => {
  let component: PercentageLanguagesComponent;
  let fixture: ComponentFixture<PercentageLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentageLanguagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentageLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
