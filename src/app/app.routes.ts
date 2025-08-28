import { Routes } from '@angular/router';
import { ProgramingLanguageListComponent } from './programing-language/components/programing-language-list-component/programing-language-list-component';
import { ProgramingLanguageFormComponent } from './programing-language/components/programing-language-form-component/programing-language-form-component';

export const routes: Routes = [
    {
        path: 'programinglanguages',
        component: ProgramingLanguageListComponent,
    },
    {
        path: 'programinglanguages/new',
        component: ProgramingLanguageFormComponent,
    },
    {
        path: 'programinglanguages/edit/:id',
        component: ProgramingLanguageFormComponent,
    },
    {
        path: 'programinglanguages/delete/:id',
        component: ProgramingLanguageFormComponent,
    },
    
];
