import type { ApiResponse } from "../types/type-services/animeThemeTypes";


const API_URL ='https://api.animethemes.moe/anime?filter[season]=winter,summer,spring&filter[year]=2025,2024,2023,2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010&[type]=OP&page[size]=80&sort=random&media_format=[TV]&include=images,animethemes.animethemeentries.videos';

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