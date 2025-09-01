import { getCustomAnimeName } from "@/services/getCustomAnimeName";
import { useQuery } from "@tanstack/react-query";

export default function useAnimesCustomName (animeName:string){
    const {data , isLoading , error} = useQuery({
        queryKey : ['animes' , animeName],
        queryFn : () => getCustomAnimeName(animeName),
        staleTime : 1000 * 60 * 5,
    })

    return {data , isLoading , error};
}