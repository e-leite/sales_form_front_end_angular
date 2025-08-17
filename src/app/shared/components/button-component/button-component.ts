import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-component',
  imports: [CommonModule],
  templateUrl: './button-component.html',
  styleUrl: './button-component.scss'
})
export class ButtonComponent {
    @Input() label: string = 'Button';
    @Input() type: 'primary' | 'success' | 'error' = 'primary';
}
