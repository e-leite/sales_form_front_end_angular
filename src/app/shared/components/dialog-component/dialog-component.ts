import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ButtonComponent } from "../button-component/button-component";
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ISalesTeam } from '../../interfaces/sales-team.interface';

@Component({
  selector: 'app-dialog-component',
  imports: [ButtonComponent, ReactiveFormsModule],
  templateUrl: './dialog-component.html',
  styleUrl: './dialog-component.scss'
})
export class DialogComponent {
    
    private readonly fb = inject(NonNullableFormBuilder);
    
    @Output() closeDialog = new EventEmitter<void>();
    @Output() saved = new EventEmitter<void>();
    @Input() data!: ISalesTeam | null;
    
    dialogForm = this.fb.group({
        id: [''],
        name: ['', [Validators.required,]],
        sellersIds: [['']],
    })
    
    
    onSave() {
    }

    onCancel() {
        this.dialogForm.reset();
        this.closeDialog.emit();
    }
}
