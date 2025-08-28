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

    private readonly apiUrl = 'http://localhost:8080/api';

    get(): Observable<IProgramingLanguage[]> {
        return this.httpClient.get<IProgramingLanguage[]>(`${this.apiUrl}/programinglanguages`)
    }

    save(ProgramingLanguageCreateDto: ProgramingLanguageCreateDto): Observable<IProgramingLanguage> {
        return this.httpClient.post<IProgramingLanguage>(`${this.apiUrl}/programinglanguages`, ProgramingLanguageCreateDto)
    }

    update(salesTeam: IProgramingLanguage): Observable<IProgramingLanguage> {
        return this.httpClient.put<IProgramingLanguage>(`${this.apiUrl}/programinglanguages/${salesTeam.id}`, salesTeam)
    }

    delete(id: string): Observable<void> {
        return this.httpClient.delete<void>(`${this.apiUrl}/programinglanguages/${id}`)
    }
  
}
