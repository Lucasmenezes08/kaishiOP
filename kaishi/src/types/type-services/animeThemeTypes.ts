export interface AnimeImage {
    link : string;
    facet: string;
}

export interface AnimeVideo {
    link: string
}

export interface AnimeTheme {
    slug: string;
    song: {
        title: string;
        artists: {name: string }[]
    }
    animethemeentries : {
        videos: AnimeVideo[];
    }[];
}

export interface AnimeCard {
    id: number;
    name: string;
    images: AnimeImage[];
    animeThemes: AnimeTheme[]
}

export interface AnimeData {
    name: string;
    year: number;
    synopsis: string;
    images: AnimeImage;
    animeThemes: AnimeTheme;
}