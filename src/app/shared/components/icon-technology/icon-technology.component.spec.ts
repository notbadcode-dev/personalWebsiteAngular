import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconTechnologyComponent } from './icon-technology.component';

describe('IconTechnologyComponent', () => {
  let component: IconTechnologyComponent;
  let fixture: ComponentFixture<IconTechnologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconTechnologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
