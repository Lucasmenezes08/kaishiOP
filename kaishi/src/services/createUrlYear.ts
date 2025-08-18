export function createUrlByYear (year:number):string{
    const API_URL_BASE = 'https://api.animethemes.moe/anime';


    const param = new URLSearchParams({
        'filter[year]' : String(year),
        'page[size]' : '50',
        'sort' : '-id',
        'include': 'images,animethemes.animethemeentries.videos',
        
    })

    return `${API_URL_BASE}?${param.toString()}`;
}