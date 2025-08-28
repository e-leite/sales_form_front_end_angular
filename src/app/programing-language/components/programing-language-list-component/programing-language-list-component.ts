import { Component, inject, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ButtonComponent } from "../../../shared/components/button-component/button-component";
import { IProgramingLanguage } from '../../../shared/interfaces/programing-language.interface';
import { ProgramingLanguageService } from '../../services/programing-language-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-programing-language-list-component',
  imports: [DatePipe, ButtonComponent],
  templateUrl: './programing-language-list-component.html',
  styleUrl: './programing-language-list-component.scss'
})
export class ProgramingLanguageListComponent implements OnInit {

    private programingLanguageService = inject(ProgramingLanguageService)
    private router = inject(Router)
    private route = inject(ActivatedRoute)


    programingLanguages: IProgramingLanguage[] = []

    ngOnInit(): void {
        this.getProgramingLanguages();
    }

    onCreateNew() {
        this.router.navigate(['new'], { relativeTo: this.route })
    }

    onEdit(item: IProgramingLanguage) {
        this.router.navigate(['edit', item.id], { relativeTo: this.route })
    }

    onDelete(id: string) {
        this.programingLanguageService.delete(id).subscribe({
            next: () => this.getProgramingLanguages()
        })
    }

    private getProgramingLanguages() {
        this.programingLanguageService.get().subscribe(pls => this.programingLanguages = pls);
    }
}
