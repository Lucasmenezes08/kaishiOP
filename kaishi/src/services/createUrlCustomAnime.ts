export default function createUrlCustomAnime(animeName : string){
    const URL_BASE = `https://api.animethemes.moe/anime/`;

    const param = new URLSearchParams({
        'filter[name]' : animeName,
        'page[size]' : '10',
        'type' : 'OP',
        'sort' : 'random',
        'media_format' : 'TV',
        'include': 'images,animethemes.animethemeentries.videos',
    })

    return `${URL_BASE}?${param.toString()}`;
}