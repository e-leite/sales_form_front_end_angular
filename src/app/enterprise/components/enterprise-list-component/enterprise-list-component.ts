import { Component, inject } from '@angular/core';
import { EnterpriseService } from '../../services/enterprise-service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IEnterprise } from '../../../shared/interfaces/enterprise.interface';
import { ButtonComponent } from "../../../shared/components/button-component/button-component";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-enterprise-list-component',
  imports: [DatePipe, RouterModule, ButtonComponent],
  templateUrl: './enterprise-list-component.html',
  styleUrl: './enterprise-list-component.scss'
})
export class EnterpriseListComponent {
    private enterpriseService = inject(EnterpriseService)
    private router = inject(Router)
    private route = inject(ActivatedRoute)

    enterprises: IEnterprise[] = []

    ngOnInit(): void {
        this.route.url.subscribe(() => this.getEnterprise());        
    }

    onCreateNew() {
        this.router.navigate(['new'], { relativeTo: this.route });
    }

    onEdit(item: IEnterprise) {
        this.router.navigate(['edit', item.id], { relativeTo: this.route });
    }

    onDelete(id: string) {
        this.enterpriseService.delete(id).subscribe({
            next: () => this.getEnterprise()
        })
    }

    private getEnterprise() {
        this.enterpriseService.get().subscribe(data => {
            this.enterprises = data;
        });
    }
}
