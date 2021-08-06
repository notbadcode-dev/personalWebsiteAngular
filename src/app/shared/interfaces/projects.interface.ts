import { ETechnologyType } from "../../shared/enums/projects.enum";

export interface IProject {
    id: number,
    title: string,
    description?: string,
    siteUrl?: string,
    repositoryUrl?: string,
    technologyList?: ITechnology[]
}

export interface ITechnology {
    title: string,
    source?: string,
    type: ETechnologyType
}