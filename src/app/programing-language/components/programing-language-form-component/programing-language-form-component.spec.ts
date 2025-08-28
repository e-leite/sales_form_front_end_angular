import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramingLanguageFormComponent } from './programing-language-form-component';

describe('ProgramingLanguageFormComponent', () => {
  let component: ProgramingLanguageFormComponent;
  let fixture: ComponentFixture<ProgramingLanguageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramingLanguageFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramingLanguageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
