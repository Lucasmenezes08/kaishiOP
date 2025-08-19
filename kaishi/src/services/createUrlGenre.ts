export function createUrlGenre (genre:string){
    const APi_URL_BASE = 'https://api.animethemes.moe/anime';


    const param = new URLSearchParams({
        'filter[year]' : String(genre),
        'page[size]' : '50',
        'sort' : 'random',
        'media_format' : 'TV',
        'include': 'images,animethemes.animethemeentries.videos',
    })


    return `${APi_URL_BASE}?${param.toString()}`;
}