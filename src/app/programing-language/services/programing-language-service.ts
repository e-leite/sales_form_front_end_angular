import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProgramingLanguage } from '../../shared/interfaces/programing-language.interface';
import { ProgramingLanguageCreateDto } from '../../shared/dtos/programing-language-create-dto';

@Injectable({
  providedIn: 'root'
})
export class ProgramingLanguageService {
    private readonly httpClient = inject(HttpClient);

    private readonly apiUrl = '/api/programinglanguages';

    get(): Observable<IProgramingLanguage[]> {
        return this.httpClient.get<IProgramingLanguage[]>(`${this.apiUrl}`)
    }

    getById(id: string): Observable<IProgramingLanguage> {
        return this.httpClient.get<IProgramingLanguage>(`${this.apiUrl}/${id}`)
    }

    save(dto: ProgramingLanguageCreateDto): Observable<IProgramingLanguage> {
        return this.httpClient.post<IProgramingLanguage>(`${this.apiUrl}`, dto)
    }

    update(id: string, dto: ProgramingLanguageCreateDto): Observable<IProgramingLanguage> {
        return this.httpClient.put<IProgramingLanguage>(`${this.apiUrl}/${id}`, dto)
    }

    delete(id: string): Observable<void> {
        return this.httpClient.delete<void>(`${this.apiUrl}/${id}`)
    }
  
}
