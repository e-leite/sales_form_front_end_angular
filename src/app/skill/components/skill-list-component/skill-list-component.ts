import { Component, inject } from '@angular/core';
import { SkillService } from '../../services/skill-service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ISkill } from '../../../shared/interfaces/skill.interface';
import { ButtonComponent } from "../../../shared/components/button-component/button-component";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-skill-list-component',
  imports: [DatePipe, ButtonComponent, RouterModule],
  templateUrl: './skill-list-component.html',
  styleUrl: './skill-list-component.scss'
})
export class SkillListComponent {
    private skillService = inject(SkillService)
    private router = inject(Router)
    private route = inject(ActivatedRoute)

    skills: ISkill[] = []

    ngOnInit(): void {
        this.route.url.subscribe(() => this.getSkill());        
    }

    onCreateNew() {
        this.router.navigate(['new'], { relativeTo: this.route });
    }

    onEdit(item: ISkill) {
        this.router.navigate(['edit', item.id], { relativeTo: this.route });
    }

    onDelete(id: string) {
        this.skillService.delete(id).subscribe({
            next: () => this.getSkill()
        })
    }

    private getSkill() {
        this.skillService.get().subscribe(data => {
            this.skills = data;
        });
    }
}
