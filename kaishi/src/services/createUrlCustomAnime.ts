export default function createUrlCustomAnime(animeName : string){
    const URL_BASE = 'https://api.animethemes.moe/anime';

    const param = new URLSearchParams({
        'filter[name]' : String(animeName),
        'page[size]' : '12',
        'type' : 'OP',
        'sort' : 'random',
        'media_format' : 'TV',
        'include': 'images,animethemes.animethemeentries.videos',
    })

    return `${URL_BASE}?${param.toString()}`;
}