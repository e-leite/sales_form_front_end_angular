import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesTeamService {

    private readonly httpClient = inject(HttpClient);

    private readonly apiUrl = 'http://localhost:8080';

    getSalesTeam(): Observable<any[]> {
        return this.httpClient.get<any[]>(`${this.apiUrl}/salesteams`)
    }  
}
