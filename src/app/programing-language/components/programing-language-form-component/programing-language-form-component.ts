import { Component, inject, OnInit } from '@angular/core';
import { ButtonComponent } from "../../../shared/components/button-component/button-component";
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProgramingLanguageService } from '../../services/programing-language-service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProgramingLanguageCreateDto } from '../../../shared/dtos/programing-language-create-dto';

@Component({
  selector: 'app-programing-language-form-component',
  imports: [ButtonComponent, ReactiveFormsModule],
  templateUrl: './programing-language-form-component.html',
  styleUrl: './programing-language-form-component.scss'
})
export class ProgramingLanguageFormComponent implements OnInit {
    
    private readonly fb = inject(FormBuilder);
    private readonly programingLanguageService = inject(ProgramingLanguageService);
    private readonly location = inject(Location);
    private readonly route = inject(ActivatedRoute);

    protected form = this.fb.group({
        id: [''],
        name: ['', Validators.required],
        category: ['', Validators.required]
    })

    ngOnInit(): void {
        const id: string = this.route.snapshot.params['id'];
        if(id) {
            this.programingLanguageService.getById(id).subscribe(pl => {
                this.form.patchValue({
                    id: pl.id,
                    name: pl.name,
                    category: pl.category
                })
            });
        }
    }

    onSave() {
        if(this.form.valid) {
            if(this.form.value?.id) {
                const data: ProgramingLanguageCreateDto = {
                    name: this.form.value.name ?? '',
                    category: this.form.value.category ?? ''
                }
                this.programingLanguageService.update(this.form.value.id, data).subscribe({
                    next: () => this.location.back()
                })
            } else {
                this.programingLanguageService.save(
                    {
                        name: this.form.value.name ?? '',
                        category: this.form.value.category ?? ''
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


}
