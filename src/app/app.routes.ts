import { Routes } from '@angular/router';
import { ProgramingLanguageListComponent } from './programing-language/components/programing-language-list-component/programing-language-list-component';
import { ProgramingLanguageFormComponent } from './programing-language/components/programing-language-form-component/programing-language-form-component';
import { SkillCategoryListComponent } from './skill-category/components/skill-category-list-component/skill-category-list-component';
import { SkillCategoryFormComponent } from './skill-category/components/skill-category-form-component/skill-category-form-component';

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

    {
        path: 'skillcategories',
        component: SkillCategoryListComponent,
    },
    {
        path: 'skillcategories/new',
        component: SkillCategoryFormComponent,
    },
    {
        path: 'skillcategories/edit/:id',
        component: SkillCategoryFormComponent,
    },
    {
        path: 'skillcategories/delete/:id',
        component: SkillCategoryFormComponent,
    },
    
];
