import type { ApiResponse } from "../types/type-services/animeThemeTypes";
import { createUrlGenre } from "./createUrlGenre";


export async function getAnimesGenre(genre:string):Promise<ApiResponse>{
    const URL = createUrlGenre(genre);

    const response = await fetch(URL);

    if (!response.ok){
        throw new Error ("Falha ao capturar dados por genero.");
    }

    return response.json();
}



