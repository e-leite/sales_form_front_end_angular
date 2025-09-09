import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EnterpriseService } from '../../services/enterprise-service';
import { ActivatedRoute } from '@angular/router';
import { EnterpriseCreateDto } from '../../../shared/dtos/enterprise-create-dto';
import { Location } from '@angular/common';
import { ButtonComponent } from "../../../shared/components/button-component/button-component";

@Component({
  selector: 'app-enterprise-form-component',
  imports: [ReactiveFormsModule, ButtonComponent],
  templateUrl: './enterprise-form-component.html',
  styleUrl: './enterprise-form-component.scss'
})
export class EnterpriseFormComponent {
    private readonly fb = inject(NonNullableFormBuilder);
    private readonly enterpriseService = inject(EnterpriseService);
    private readonly location = inject(Location);
    private readonly route = inject(ActivatedRoute);

    protected isDialogOpen: boolean = false;
    protected enterpriseId: string = '';
    protected form = this.fb.group({
        id: [''],
        name: ['', Validators.required],
        overview: [''],
        site: [''],
        industry: [''],
        companySize: [''],
        foundationYear: [2000]
    })

    ngOnInit(): void {
        this.enterpriseId = this.route.snapshot.params['id'];
        if(this.enterpriseId) {
            this.enterpriseService.getById(this.enterpriseId).subscribe(data => {
                this.form.patchValue({
                    id: data.id,
                    name: data.name,
                    overview: data.overview,
                    site: data.site,
                    industry: data.industry,
                    companySize: data.companySize,
                    foundationYear: data.foundationYear
                })
            })
        }
    }

    onSave() {
        console.log(this.form);
        if(this.form.valid) {
            if(this.form.value?.id) {
                const data: EnterpriseCreateDto = {
                    name: this.form.value.name ?? '',
                    overview: this.form.value.overview ?? '',
                    site: this.form.value.site ?? '',
                    industry: this.form.value.industry ?? '',
                    companySize: this.form.value.companySize ?? '',
                    foundationYear: this.form.value.foundationYear
                }
                this.enterpriseService.update(this.form.value.id, data).subscribe({
                    next: () => this.location.back()
                })
            } else {
                this.enterpriseService.save(
                    {
                        name: this.form.value.name ?? '',
                        overview: this.form.value.overview ?? '',
                        site: this.form.value.site ?? '',
                        industry: this.form.value.industry ?? '',
                        companySize: this.form.value.companySize ?? '',
                        foundationYear: this.form.value.foundationYear
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
