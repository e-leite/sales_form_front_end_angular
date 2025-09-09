import { Routes } from '@angular/router';
import { ProgramingLanguageListComponent } from './programing-language/components/programing-language-list-component/programing-language-list-component';
import { ProgramingLanguageFormComponent } from './programing-language/components/programing-language-form-component/programing-language-form-component';
import { SkillCategoryListComponent } from './skill-category/components/skill-category-list-component/skill-category-list-component';
import { SkillCategoryFormComponent } from './skill-category/components/skill-category-form-component/skill-category-form-component';
import { SkillListComponent } from './skill/components/skill-list-component/skill-list-component';
import { SkillFormComponent } from './skill/components/skill-form-component/skill-form-component';
import { EnterpriseListComponent } from './enterprise/components/enterprise-list-component/enterprise-list-component';
import { EnterpriseFormComponent } from './enterprise/components/enterprise-form-component/enterprise-form-component';

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
        children: [
            {
                path: 'new',
                component: SkillCategoryFormComponent,
            },
            {
                path: 'edit/:id',
                component: SkillCategoryFormComponent,
            },
            {
                path: 'delete/:id',
                component: SkillCategoryFormComponent,
            },
        ]
    },

    {
        path: 'skills',
        component: SkillListComponent,
        children: [
            {
                path: 'new',
                component: SkillFormComponent,
            },
            {
                path: 'edit/:id',
                component: SkillFormComponent,
            },
            {
                path: 'delete/:id',
                component: SkillFormComponent,
            },
        ]
    },
    {
        path: 'enterprises',
        component: EnterpriseListComponent,
        children: [
            {
                path: 'new',
                component: EnterpriseFormComponent,
            },
            {
                path: 'edit/:id',
                component: EnterpriseFormComponent,
            },
            {
                path: 'delete/:id',
                component: EnterpriseFormComponent,
            },
        ]
    }
    
    
];
