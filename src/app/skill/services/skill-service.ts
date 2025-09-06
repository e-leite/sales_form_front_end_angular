import { inject, Injectable } from '@angular/core';
import { ISkill } from '../../shared/interfaces/skill.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SkillCreateDto } from '../../shared/dtos/skill-create-dto';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
    private readonly httpClient = inject(HttpClient);

    private readonly apiUrl = '/api/skills';

    get(): Observable<ISkill[]> {
        return this.httpClient.get<ISkill[]>(`${this.apiUrl}`)
    }

    getById(id: string): Observable<ISkill> {
        return this.httpClient.get<ISkill>(`${this.apiUrl}/${id}`)
    }

    save(dto: SkillCreateDto): Observable<ISkill> {
        return this.httpClient.post<ISkill>(`${this.apiUrl}`, dto)
    }

    update(id: string, dto: SkillCreateDto): Observable<ISkill> {
        return this.httpClient.put<ISkill>(`${this.apiUrl}/${id}`, dto)
    }

    delete(id: string): Observable<void> {
        return this.httpClient.delete<void>(`${this.apiUrl}/${id}`)
    }  
}
