import { jikanGetAnimesName } from "@/services/jikan-services/Jikan-getAnimesName";
import { useQuery } from "@tanstack/react-query";

export default function jikanUseAnimesName (name:string){
    const {data , isLoading , error} = useQuery({
        queryKey: ["animes" , name],
        queryFn : () => jikanGetAnimesName(name),
        staleTime : 1000 * 60 * 5,
    })

    return {data , isLoading , error};
}