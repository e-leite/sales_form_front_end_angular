import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramingLanguageListComponent } from './programing-language-list-component';

describe('ProgramingLanguageListComponent', () => {
  let component: ProgramingLanguageListComponent;
  let fixture: ComponentFixture<ProgramingLanguageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramingLanguageListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramingLanguageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
