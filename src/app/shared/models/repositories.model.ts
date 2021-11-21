import { EVisibilityType } from "../enums/repositories.enum";

export class Repository {
    constructor(
        public id: number,
        public name: string,
        public fullName: string,
        public description: string,
        public mainLanguage: string,
        public languages: RepositoryLanguage[],
        public topics: string[],
        public websiteUrl: string,
        public repositoryUrl: string,
        public languagesRepositoryUrl: string,
        public starsRepositoryUrl: string,
        public starsCount: number,
        public forksCount: number,
        public watchersCount: number,
        public isPublic: boolean,
        public createdDate: Date,
        public pushedDate: Date,
        public updatedDate: Date,
    ) {}
}

export class RepositoryHelper {
    public static mapRepository(draftRepository: any): Repository {
        return new Repository(
            draftRepository.id,
            draftRepository.name,
            draftRepository.full_name,
            draftRepository.description,
            draftRepository.language,
            [draftRepository.language],
            draftRepository.topics,
            draftRepository.homepage.length > 0 ? draftRepository.homepage : null,
            draftRepository.html_url,
            draftRepository.languages_url,
            draftRepository.stargazers_url,
            draftRepository.stargazers_count,
            draftRepository.forks_count,
            draftRepository.watchers_count,
            draftRepository.visibility === EVisibilityType.public,
            draftRepository.created_at,
            draftRepository.pushed_at,
            draftRepository.updated_at
        );
    }

    public static mapRepositoryList(draftRepositoryList: any[]): Repository[] {
        return draftRepositoryList.map(r => this.mapRepository(r));
    }
}

export class RepositoryLanguage {
    constructor(
        public name: string,
        public percentage: string,
        public percentageTransform: number,
    ) {}
}

export class RepositoryLanguageHelper {
    public static mapRepositoryLanguage(draftRepositoryLanguageList: any[]): RepositoryLanguage[] {
        const repositoryLanguageList: RepositoryLanguage[] = [];
        const totalOfPercentage: number = Object.entries(draftRepositoryLanguageList).map(rl => rl[1]).reduce((a, b) => a + b, 0);
        for (const [key, value] of Object.entries(draftRepositoryLanguageList)) {
            repositoryLanguageList.push({
                name: key,
                percentage: ((value/totalOfPercentage) * 100).toFixed(2),
                percentageTransform: 0
            })
        }

        const sumOfPercentage: number = repositoryLanguageList.map(rl => rl.percentage).reduce((r, e) => r + +e.replace(',', '.'), 0);
        const maxPercentage: number = repositoryLanguageList.reduce((acc, rl) => acc = acc > +rl.percentage.replace(',', '.') ? acc : +rl.percentage.replace(',', '.'), 0);
        let repositoryLanguageTranform: any = repositoryLanguageList?.find(rl => +rl.percentage.replace(',', '.') === maxPercentage);

        if ((sumOfPercentage - 100) > 0) {
            if (repositoryLanguageTranform !== undefined) {
                repositoryLanguageTranform.percentage = parseFloat(+repositoryLanguageTranform.percentage.replace(',', '.') - (sumOfPercentage - 100) + "").toFixed(2);
            }
        } else if (sumOfPercentage < 100) {
            if (repositoryLanguageTranform !== undefined) {
                repositoryLanguageTranform.percentage = parseFloat(+repositoryLanguageTranform.percentage.replace(',', '.') + (100 - sumOfPercentage) + "").toFixed(2);
            }
        }
        repositoryLanguageList.map(rl => rl.percentageTransform = +rl.percentage.replace(',', '.'));

        return repositoryLanguageList;
    }
}