import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SkillSubcategoryCreateDto } from '../../shared/dtos/skill-subcategory-create-dto';
import { ISkillSubcategory } from '../../shared/interfaces/skill-subcategory';

@Injectable({
  providedIn: 'root'
})
export class SkillSubcategoryService {
    private readonly httpClient = inject(HttpClient);

    private readonly apiUrl = '/api/skillsubcategories';

    get(): Observable<ISkillSubcategory[]> {
        return this.httpClient.get<ISkillSubcategory[]>(`${this.apiUrl}`)
    }

    getById(id: string): Observable<ISkillSubcategory> {
        return this.httpClient.get<ISkillSubcategory>(`${this.apiUrl}/${id}`)
    }

    save(dto: SkillSubcategoryCreateDto): Observable<ISkillSubcategory> {
        return this.httpClient.post<ISkillSubcategory>(`${this.apiUrl}`, dto)
    }

    update(id: string, dto: SkillSubcategoryCreateDto): Observable<ISkillSubcategory> {
        return this.httpClient.put<ISkillSubcategory>(`${this.apiUrl}/${id}`, dto)
    }

    delete(id: string): Observable<void> {
        return this.httpClient.delete<void>(`${this.apiUrl}/${id}`)
    }  
}
