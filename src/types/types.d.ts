
export interface IMangaTitle {
    en: string;
}

export interface IMangaAltTitle {
    ko: string;
    'ko-ro': string;
    en: string;
    ru: string;
    zh: string;
    ja: string;
    'es-la': string;
    'ja-ro': string;
    fr: string;
    pl: string;
}

export interface IMangaDescription {
    en: string;
    ko: string;
    ru: string;
    zh: string;
    ja: string;
    th: string;
    fr: string;
}

export interface ILinks {
    al: string;
    mu: string;
    raw: string;
    bw: string;
    amz: string;
    ebj: string;
    mal: string;
    ap: string;
    kt: string;
    engtl: string;
    cdj: string;
    nu: string;
}

export interface ITagName {
    en: string;
}

export interface ITagDescription {
}

export interface ITagAttributes {
    name: ITagName;
    description: ITagDescription;
    group: string;
    version: number;
}

export interface IMangaTag {
    id: string;
    type: string;
    attributes: ITagAttributes;
    relationships: any[];
}

export interface IMangaAttributes {
    title: IMangaTitle;
    altTitles: IMangaAltTitle[];
    description: IMangaDescription;
    isLocked: boolean;
    links: ILinks;
    originalLanguage: string;
    lastVolume: string;
    lastChapter: string;
    publicationDemographic: string;
    status: string;
    year?: number;
    contentRating: string;
    tags: IMangaTag[];
    state: string;
    chapterNumbersResetOnNewVolume: boolean;
    createdAt: Date;
    updatedAt: Date;
    version: number;
    availableTranslatedLanguages: string[];
    latestUploadedChapter: string;
}

export interface IMangaRelationship {
    id: string;
    type: string;
    related: string;
}

export interface IManga {
    id: string;
    type: string;
    attributes: IMangaAttributes;
    relationships: IMangaRelationship[];
}

export interface IMangaListResponse {
    result: string;
    response: string;
    data: IManga[];
    limit: number;
    offset: number;
    total: number;
}

export interface IMangaResponse {
    result: string;
    response: string;
    data: IManga;
    limit: number;
    offset: number;
    total: number;
}

export interface IError {}

export interface IMangaStatisticsResponse {
    result: string;
    statistics: string;
}

    export interface IMangaComments {
        threadId: number;
        repliesCount: number;
    }

    export interface IStatsDistribution {
        1: number;
        2: number;
        3: number;
        4: number;
        5: number;
        6: number;
        7: number;
        8: number;
        9: number;
        10: number;
    }

    export interface IMangaRating {
        average: number;
        bayesian: number;
        distribution: IStatsDistribution;
    }

    export interface IMangaStatistics {
        comments: IMangaComments;
        rating: IMangaRating;
        follows: number;
    }

    export interface IStatisticsObject {
        statistics: IMangaStatistics;
    }

    export interface IStatisticsResponse {
        result: string;
        statistics: IStatisticsObject;
    }

