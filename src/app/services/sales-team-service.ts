import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISalesTeam } from '../shared/interfaces/sales-team.interface';
import { SalesTeamCreateDto } from '../shared/dtos/sales-team-create-dto';

@Injectable({
  providedIn: 'root'
})
export class SalesTeamService {

    private readonly httpClient = inject(HttpClient);

    private readonly apiUrl = 'http://localhost:8080';

    get(): Observable<ISalesTeam[]> {
        return this.httpClient.get<ISalesTeam[]>(`${this.apiUrl}/salesteams`)
    }

    save(salesTeamCreateDto: SalesTeamCreateDto): Observable<ISalesTeam> {
        return this.httpClient.post<ISalesTeam>(`${this.apiUrl}/salesteams`, salesTeamCreateDto)
    }

    update(salesTeam: ISalesTeam): Observable<ISalesTeam> {
        return this.httpClient.put<ISalesTeam>(`${this.apiUrl}/salesteams/${salesTeam.id}`, salesTeam)
    }

    delete(id: string): Observable<void> {
        return this.httpClient.delete<void>(`${this.apiUrl}/salesteams/${id}`)
    }
}
