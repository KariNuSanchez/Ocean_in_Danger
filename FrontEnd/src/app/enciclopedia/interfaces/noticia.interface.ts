export interface Noticia {
    pagination: Pagination;
    data:       Datum[];
}

export interface Datum {
    author:       null | string;
    title:        string;
    description:  string;
    url:          string;
    source:       Source;
    image:        string;
    category:     Category;
    language:     Language;
    country:      Country;
    published_at: Date;
}

export enum Category {
    Science = "science",
}

export enum Country {
    Us = "us",
}

export enum Language {
    En = "en",
}

export enum Source {
    PhysOrgNewsAndArticlesOnScienceAndTechnology = "Phys.org - News And Articles On Science And Technology",
    ScienceNewsForStudents = "Science News For Students",
    TruthBeautyScienceUndark = "Truth Beauty Science. - Undark",
}

export interface Pagination {
    limit:  number;
    offset: number;
    count:  number;
    total:  number;
}