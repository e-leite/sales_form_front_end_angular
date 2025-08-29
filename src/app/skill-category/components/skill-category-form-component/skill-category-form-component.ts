import { Component, inject, OnInit } from '@angular/core';
import { SkillCategoryCreateDto } from '../../../shared/dtos/skill-category-create-dto';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SkillCategoryService } from '../../services/skill-category-service';
import { Location } from '@angular/common';
import { ButtonComponent } from "../../../shared/components/button-component/button-component";
import { ISkillSubcategory } from '../../../shared/interfaces/skill-subcategory';
import { SkillSubcategoryCreateDto } from '../../../shared/dtos/skill-subcategory-create-dto';
import { SkillSubcategoryService } from '../../services/skill-subcategory-service';

@Component({
  selector: 'app-skill-category-form-component',
  imports: [ButtonComponent, ReactiveFormsModule],
  templateUrl: './skill-category-form-component.html',
  styleUrl: './skill-category-form-component.scss'
})
export class SkillCategoryFormComponent implements OnInit {

    private readonly fb = inject(FormBuilder);
    private readonly skillCategoryService = inject(SkillCategoryService);
    private readonly skillSubcategoryService = inject(SkillSubcategoryService);
    private readonly location = inject(Location);
    private readonly route = inject(ActivatedRoute);

    protected subCategories: ISkillSubcategory[] = [];
    protected isDialogOpen: boolean = false;
    protected form = this.fb.group({
        id: [''],
        name: ['', Validators.required],
    })

    protected subcategoryForm = this.fb.group({
        id: [''],
        name: ['', Validators.required],
        categoryId: ['', Validators.required]
    })

    ngOnInit(): void {
        const id: string = this.route.snapshot.params['id'];
        if(id) {
            this.skillCategoryService.getById(id).subscribe(data => {
                this.form.patchValue({
                    id: data.id,
                    name: data.name,
                });
                this.subCategories = data.subcategory;
                this.subcategoryForm.patchValue({
                    name: '',
                    categoryId: id,
                })
            });
        }
    }

    onSave() {
        if(this.form.valid) {
            if(this.form.value?.id) {
                const data: SkillCategoryCreateDto = {
                    name: this.form.value.name ?? '',
                }
                this.skillCategoryService.update(this.form.value.id, data).subscribe({
                    next: () => this.location.back()
                })
            } else {
                this.skillCategoryService.save(
                    {
                        name: this.form.value.name ?? ''
                    }
                ).subscribe({
                    next: () => this.location.back()
                });
            }
        }
    }

    onCancel() {
        this.location.back();
    }

    onSaveSubcategory() {
        if(this.subcategoryForm.valid) {
            if(this.subcategoryForm.value?.id !== '') {
                const data: SkillSubcategoryCreateDto = {
                    name: this.subcategoryForm.value.name ?? '',
                    categoryId: this.route.snapshot.params['id']
                }
                this.skillSubcategoryService.update(this.subcategoryForm.value.id ?? '', data).subscribe({
                    next: () => this.location.back()
                })
            } else {
                this.skillSubcategoryService.save(
                    {
                        name: this.subcategoryForm.value.name ?? '',
                        categoryId: this.route.snapshot.params['id']
                    }
                ).subscribe({
                    next: () => {
                        this.tooglDialog();
                        this.skillCategoryService.getById(this.route.snapshot.params['id'])
                            .subscribe(data => this.subCategories = data.subcategory);
                    }
                });
            }
        }
    }

    tooglDialog() {
        this.isDialogOpen = !this.isDialogOpen;
    }

}
