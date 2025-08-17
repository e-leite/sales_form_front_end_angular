import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISalesTeam } from '../shared/interfaces/sales-team.interface';

@Injectable({
  providedIn: 'root'
})
export class SalesTeamService {

    private readonly httpClient = inject(HttpClient);

    private readonly apiUrl = 'http://localhost:8080';

    getSalesTeam(): Observable<ISalesTeam[]> {
        return this.httpClient.get<ISalesTeam[]>(`${this.apiUrl}/salesteams`)
    }  
}
