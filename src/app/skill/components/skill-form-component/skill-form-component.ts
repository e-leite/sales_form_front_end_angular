import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SkillService } from '../../services/skill-service';
import { ActivatedRoute } from '@angular/router';
import { SkillCategoryService } from '../../../skill-category/services/skill-category-service';
import { Location } from '@angular/common';
import { ButtonComponent } from "../../../shared/components/button-component/button-component";
import { ISkillCategory } from '../../../shared/interfaces/skill-category.interface';
import { SkillCreateDto } from '../../../shared/dtos/skill-create-dto';

@Component({
  selector: 'app-skill-form-component',
  imports: [ReactiveFormsModule, ButtonComponent],
  templateUrl: './skill-form-component.html',
  styleUrl: './skill-form-component.scss'
})
export class SkillFormComponent {
    private readonly fb = inject(FormBuilder);
    private readonly skillService = inject(SkillService);
    private readonly skillCategoryService = inject(SkillCategoryService)
    private readonly location = inject(Location);
    private readonly route = inject(ActivatedRoute);

    protected categories: ISkillCategory[] = [];
    protected isDialogOpen: boolean = false;
    protected skillId: string = '';
    protected form = this.fb.group({
        id: [''],
        name: ['', Validators.required],
        skillCategoryId: ['', Validators.required]
    })

    ngOnInit(): void {
        this.skillId = this.route.snapshot.params['id'];
        this.skillCategoryService.get()
            .subscribe(data => this.categories = data);
        if(this.skillId) {
            this.skillService.getById(this.skillId).subscribe(data => {
                this.form.patchValue({
                    id: data.id,
                    name: data.name,
                    skillCategoryId: data.category.id,
                })
            })
        }
    }

    onSave() {
        if(this.form.valid) {
            if(this.form.value?.id) {
                const data: SkillCreateDto = {
                    name: this.form.value.name ?? '',
                    skillCategoryId: this.form.value.skillCategoryId ?? '',
                }
                this.skillService.update(this.form.value.id, data).subscribe({
                    next: () => this.location.back()
                })
            } else {
                this.skillService.save(
                    {
                        name: this.form.value.name ?? '',
                        skillCategoryId: this.form.value.skillCategoryId ?? ''
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

    tooglDialog() {
        this.isDialogOpen = !this.isDialogOpen;
    }
}
