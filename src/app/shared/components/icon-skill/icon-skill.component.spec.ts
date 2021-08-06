import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSkillComponent } from './icon-skill.component';

describe('IconSkillComponent', () => {
  let component: IconSkillComponent;
  let fixture: ComponentFixture<IconSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
