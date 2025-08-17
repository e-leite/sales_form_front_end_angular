import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ButtonComponent } from "../button-component/button-component";
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SalesTeamService } from '../../../services/sales-team-service';
import { SalesTeamCreateDto } from '../../dtos/sales-team-create-dto';

@Component({
  selector: 'app-dialog-component',
  imports: [ButtonComponent, ReactiveFormsModule],
  templateUrl: './dialog-component.html',
  styleUrl: './dialog-component.scss'
})
export class DialogComponent {

    private readonly salesTeamService = inject(SalesTeamService);
    private readonly fb = inject(NonNullableFormBuilder);

    @Output() closeDialog = new EventEmitter<void>();
    @Output() saved = new EventEmitter<void>();

    dialogForm = this.fb.group({
        name: ['', [
            Validators.required,
        ]],
    })

    onSave() {
        if(this.dialogForm.valid) {
            this.salesTeamService.saveSalesTeam(this.dialogForm.value).subscribe({
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

    onCancel() {
        this.dialogForm.reset();
        this.closeDialog.emit();
    }

}
