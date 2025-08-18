import type { ApiResponse } from "../types/type-services/animeThemeTypes";
import { createUrlByYear } from "./createUrlYear";

export default async function getAnimeYear (year:number):Promise<ApiResponse>{
    const URL = createUrlByYear(year);

    const response = await fetch(URL);

    if (!response.ok){
        throw new Error ('Erro ao procurar anime por ano');
    }

    return response.json();
}