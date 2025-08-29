import { ISkillSubcategory } from "./skill-subcategory";

export interface ISkillCategory {
    id: string;
    name: string;
    subcategory: ISkillSubcategory[];
    createdAt: string;
    updatedAt: string;
}