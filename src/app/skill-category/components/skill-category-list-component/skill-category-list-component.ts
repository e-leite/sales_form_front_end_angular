import { Component, inject, OnInit } from '@angular/core';
import { SkillCategoryService } from '../../services/skill-category-service';
import { ISkillCategory } from '../../../shared/interfaces/skill-category.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ButtonComponent } from "../../../shared/components/button-component/button-component";

@Component({
  selector: 'app-skill-category-list-component',
  imports: [DatePipe, ButtonComponent],
  templateUrl: './skill-category-list-component.html',
  styleUrl: './skill-category-list-component.scss'
})
export class SkillCategoryListComponent implements OnInit {

    private skillCategoryService = inject(SkillCategoryService)
    private router = inject(Router)
    private route = inject(ActivatedRoute)


    skillCategories: ISkillCategory[] = []

    ngOnInit(): void {
        this.getSkillCategories();
    }

    onCreateNew() {
        this.router.navigate(['new'], { relativeTo: this.route })
    }

    onEdit(item: ISkillCategory) {
        this.router.navigate(['edit', item.id], { relativeTo: this.route })
    }

    onDelete(id: string) {
        this.skillCategoryService.delete(id).subscribe({
            next: () => this.getSkillCategories()
        })
    }

    private getSkillCategories() {
        this.skillCategoryService.get().subscribe(data => {
            this.skillCategories = data;
            console.log(this.skillCategories);
        });
    }

}
