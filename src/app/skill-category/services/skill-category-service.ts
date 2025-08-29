import { inject, Injectable } from '@angular/core';
import { ISkillCategory } from '../../shared/interfaces/skill-category.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SkillCategoryCreateDto } from '../../shared/dtos/skill-category-create-dto';

@Injectable({
  providedIn: 'root'
})
export class SkillCategoryService {
    private readonly httpClient = inject(HttpClient);

    private readonly apiUrl = '/api/skillcategories';

    get(): Observable<ISkillCategory[]> {
        return this.httpClient.get<ISkillCategory[]>(`${this.apiUrl}`)
    }

    getById(id: string): Observable<ISkillCategory> {
        return this.httpClient.get<ISkillCategory>(`${this.apiUrl}/${id}`)
    }

    save(dto: SkillCategoryCreateDto): Observable<ISkillCategory> {
        return this.httpClient.post<ISkillCategory>(`${this.apiUrl}`, dto)
    }

    update(id: string, dto: SkillCategoryCreateDto): Observable<ISkillCategory> {
        return this.httpClient.put<ISkillCategory>(`${this.apiUrl}/${id}`, dto)
    }

    delete(id: string): Observable<void> {
        return this.httpClient.delete<void>(`${this.apiUrl}/${id}`)
    }
  
}
