import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillCategoryFormComponent } from './skill-category-form-component';

describe('SkillCategoryFormComponent', () => {
  let component: SkillCategoryFormComponent;
  let fixture: ComponentFixture<SkillCategoryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillCategoryFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillCategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
