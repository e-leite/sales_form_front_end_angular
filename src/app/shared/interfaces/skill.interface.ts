import { ISkillCategory } from "./skill-category.interface";

export interface ISkill {
    id: string;
    name: string;
    category: ISkillCategory;
    createdAt: string;
    updatedAt: string;
}