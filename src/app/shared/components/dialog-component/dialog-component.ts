import { Component } from '@angular/core';
import { ButtonComponent } from "../button-component/button-component";

@Component({
  selector: 'app-dialog-component',
  imports: [ButtonComponent],
  templateUrl: './dialog-component.html',
  styleUrl: './dialog-component.scss'
})
export class DialogComponent {

}
