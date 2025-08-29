import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillCategoryListComponent } from './skill-category-list-component';

describe('SkillCategoryListComponent', () => {
  let component: SkillCategoryListComponent;
  let fixture: ComponentFixture<SkillCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillCategoryListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
