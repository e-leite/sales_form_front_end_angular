import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ButtonComponent } from "../../../shared/components/button-component/button-component";
import { IProgramingLanguage } from '../../../shared/interfaces/programing-language.interface';

@Component({
  selector: 'app-programing-language-list-component',
  imports: [DatePipe, ButtonComponent],
  templateUrl: './programing-language-list-component.html',
  styleUrl: './programing-language-list-component.scss'
})
export class ProgramingLanguageListComponent {

    programingLanguages: IProgramingLanguage[] = [
        {
            "id": "3ba901f8-827e-4cfc-bbf8-7fde6f4c6b85",
            "name": "Node XPto",
            "category": "Back-End",
            "createdAt": "2025-08-28T05:57:27.863083",
            "updatedAt": "2025-08-28T05:57:27.863083"
        },
        {
            "id": "2c2fea93-bc23-461f-8338-10244a7230a4",
            "name": "Node",
            "category": "Back-End",
            "createdAt": "2025-08-28T05:57:40.549328",
            "updatedAt": "2025-08-28T05:57:40.549328"
        },
        {
            "id": "ccea1578-1ab6-4640-8661-a83c75df1b67",
            "name": "Java",
            "category": "Back-End",
            "createdAt": "2025-08-28T05:57:45.506663",
            "updatedAt": "2025-08-28T05:57:45.506663"
        }
    ]

    onCreateNew() {
        console.log('Call create new');
    }

    onEdit(item: any) {
        console.log(item);
    }

    onDelete(item: any) {
        console.log(item);
    }

}
