import type { ApiResponse } from "@/types/type-services/animeThemeTypes";
import JikanCreateUrlName from "./jikan-createUrlName";

export async function jikanGetAnimesName(name:string):Promise<ApiResponse>{

    const URL = JikanCreateUrlName(name);

    try {
        const resData = await fetch(URL);

        if (!resData.ok){
            throw new Error("Erro ao capturar dados por nome do anime");
        }

        return resData.json();
    }

    catch (err){
        throw err;
    }
}