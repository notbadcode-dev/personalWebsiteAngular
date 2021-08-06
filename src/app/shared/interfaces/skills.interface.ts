import { ESkillIdentifier, ESkillType } from "../enums/skills.enum";

type SkillType = ESkillType.basic | ESkillType.language | ESkillType.framework | ESkillType.database | ESkillType.environment;

export interface ISkillGroup {
    title: string,
    skilllist: ISkill[]
}


export interface ISkill {
    id: ESkillIdentifier,
    title: string,
    type: SkillType
}