import { Component, EventEmitter, inject, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ButtonComponent } from "../button-component/button-component";
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SalesTeamService } from '../../../services/sales-team-service';
import { ISalesTeam } from '../../interfaces/sales-team.interface';

@Component({
  selector: 'app-dialog-component',
  imports: [ButtonComponent, ReactiveFormsModule],
  templateUrl: './dialog-component.html',
  styleUrl: './dialog-component.scss'
})
export class DialogComponent implements OnInit {
    
    private readonly salesTeamService = inject(SalesTeamService);
    private readonly fb = inject(NonNullableFormBuilder);
    
    @Output() closeDialog = new EventEmitter<void>();
    @Output() saved = new EventEmitter<void>();
    @Input() data!: ISalesTeam | null;
    
    dialogForm = this.fb.group({
        id: [''],
        name: ['', [Validators.required,]],
        sellersIds: [['']],
    })
    
    ngOnInit(): void {
        if(this.data) {
            this.dialogForm.setValue({
                id: this.data.id,
                name: this.data.name,
                sellersIds: this.data.sellersIds ?? [],
            })
        }
    }
    
    onSave() {
        if(this.dialogForm.valid) {
            console.log(this.dialogForm.value);
            this.save(this.dialogForm);
        }
    }

    onCancel() {
        this.dialogForm.reset();
        this.closeDialog.emit();
    }

    private save(fg: FormGroup) {
        if(this.data?.id && this.dialogForm.valid) {
            const salesTeam: ISalesTeam = {
                id: this.data?.id,
                name: this.dialogForm.value.name ?? '',
                sellersIds: this.dialogForm.value.sellersIds
            }
            
            this.salesTeamService.update(salesTeam).subscribe({
                next: () => {
                    this.dialogForm.reset();
                    this.saved.emit();
                },
                error: (err) => {
                    console.error('Erro ao criar Sales Team', err);
                },
            })

        } else {
            this.salesTeamService.save(this.dialogForm.value).subscribe({
                next: () => {
                    this.dialogForm.reset();
                    this.saved.emit();
                },
                error: (err) => {
                    console.error('Erro ao criar Sales Team', err);
                },
            })
        }
    }
}
