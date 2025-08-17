import getAnimeList from "../services/getAnimesList";
import { useQuery } from "@tanstack/react-query";

export function useAnimes (){
    return useQuery ({
        queryKey : ['all' ,'homepageAnimes', 'Summer2025'],
        queryFn : getAnimeList,
        staleTime: 1000 * 60 * 60,
    });
};