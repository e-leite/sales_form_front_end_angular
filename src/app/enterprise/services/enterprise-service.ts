import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnterpriseCreateDto } from '../../shared/dtos/enterprise-create-dto';
import { IEnterprise } from '../../shared/interfaces/enterprise.interface';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {
    private readonly httpClient = inject(HttpClient);

    private readonly apiUrl = '/api/enterprises';

    get(): Observable<IEnterprise[]> {
        return this.httpClient.get<IEnterprise[]>(`${this.apiUrl}`)
    }

    getById(id: string): Observable<IEnterprise> {
        return this.httpClient.get<IEnterprise>(`${this.apiUrl}/${id}`)
    }

    save(dto: EnterpriseCreateDto): Observable<IEnterprise> {
        return this.httpClient.post<IEnterprise>(`${this.apiUrl}`, dto)
    }

    update(id: string, dto: EnterpriseCreateDto): Observable<IEnterprise> {
        return this.httpClient.put<IEnterprise>(`${this.apiUrl}/${id}`, dto)
    }

    delete(id: string): Observable<void> {
        return this.httpClient.delete<void>(`${this.apiUrl}/${id}`)
    }  
}
