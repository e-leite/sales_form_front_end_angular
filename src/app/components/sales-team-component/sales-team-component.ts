import { Component, inject, OnInit } from '@angular/core';
import { SalesTeamService } from '../../services/sales-team-service';
import { ISalesTeam } from '../../shared/interfaces/sales-team.interface';

@Component({
  selector: 'app-sales-team-component',
  imports: [],
  templateUrl: './sales-team-component.html',
  styleUrl: './sales-team-component.scss'
})
export class SalesTeamComponent implements OnInit {
    
    private readonly salesTeamService = inject(SalesTeamService);
    
    protected salesTeams: ISalesTeam[] = [];
    
    ngOnInit(): void {
        this.salesTeamService.getSalesTeam().subscribe(
            salesTeams => {
                console.log(salesTeams);
                this.salesTeams = salesTeams;
            }
        )
    }



}
