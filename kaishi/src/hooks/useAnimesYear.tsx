import { useQuery } from "@tanstack/react-query";
import getAnimeYear from "../services/getAnimeYear";


export default function useAnimesYear (year:number){
    const {data , isLoading , error} = useQuery({
        queryKey: ['animes' , year],
        queryFn: () => getAnimeYear(year),
        staleTime: 1000 * 60 * 5,
    })

    return {data , isLoading , error};
}