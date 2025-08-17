import type { ApiResponse } from "../types/type-services/animeThemeTypes";


const API_URL = 'https://api.animethemes.moe/anime?filter[season]=Summer&filter[year]=2025&page[size]=18&sort=-year&include=images,animethemes.animethemeentries.videos';

export default async function getAnimeList ():Promise<ApiResponse>{
    try {
        const response = await fetch(API_URL);

         if (!response.ok){
            throw new Error ('Falha ao capturar dados da api.');
        }

        return response.json();
    }
   
    catch (err){
        throw err;
    }
    
}