import { Component, inject, OnInit } from '@angular/core';
import { SalesTeamService } from '../../services/sales-team-service';
import { ISalesTeam } from '../../shared/interfaces/sales-team.interface';
import { ButtonComponent } from "../../shared/components/button-component/button-component";
import { DialogComponent } from "../../shared/components/dialog-component/dialog-component";

@Component({
  selector: 'app-sales-team-component',
  imports: [ButtonComponent, DialogComponent],
  templateUrl: './sales-team-component.html',
  styleUrl: './sales-team-component.scss'
})
export class SalesTeamComponent implements OnInit {
    
    private readonly salesTeamService = inject(SalesTeamService);

    protected isDialogOpen: boolean = false;
    
    protected salesTeams: ISalesTeam[] = [];
    
    ngOnInit(): void {
        this.getSalesTeams();
    }

    toggleDialog() {
        this.isDialogOpen = !this.isDialogOpen;
    }
    
    onSaved() {
        this.getSalesTeams();  
        this.toggleDialog();      
    }

    private getSalesTeams() {
        this.salesTeamService.getSalesTeam().subscribe(
            salesTeams => {
                this.salesTeams = salesTeams;
            }
        )
    }



}
