import type { ApiResponse } from "@/types/type-services/animeThemeTypes";
import createUrlCustomAnime from "./createUrlCustomAnime";

export async function getCustomAnimeName (animeName:string):Promise<ApiResponse>{
    const url = createUrlCustomAnime(animeName);

    try {
        const resData  = await fetch (url);

        if (!resData.ok){
            throw new Error("Erro ao capturar anime customizado");
        }

        return resData.json();
    }
    catch (err) {
        throw err;
    }
}