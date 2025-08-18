import { useQuery } from "@tanstack/react-query";
import { getAnimesGenre } from "../services/geAnimesGenre";


export default function useAnimesGenre (genre:string){
    const {data , isLoading , error} = useQuery({
            queryKey: ['animes' , genre],
            queryFn: () => getAnimesGenre(genre),
            staleTime: 1000 * 60 * 5,
        })
    return {data , isLoading , error};
}