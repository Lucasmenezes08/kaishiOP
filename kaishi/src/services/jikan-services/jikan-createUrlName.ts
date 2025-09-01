export default function JikanCreateUrlName (animeName : string){
    const API_URL_BASE = "https://api.jikan.moe/v4/anime";

    const param = new URLSearchParams({
        'q' : String(animeName),
        

    })
    return `${API_URL_BASE}?${param.toString()}`;

}
    
