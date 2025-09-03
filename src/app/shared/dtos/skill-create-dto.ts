import { ISkillCategory } from "../interfaces/skill-category.interface";

export interface SkillCreateDto {
    name: string;
    skillCategoryId: string;
}