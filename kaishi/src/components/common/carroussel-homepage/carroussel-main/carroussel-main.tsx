import { useQueries } from "@tanstack/react-query";
import { useState } from "react";
import { Carousel , CarouselContent , CarouselItem} from "@/components/ui/carousel";
import { CarouselSkeleton } from "../../animation/animation-skeleton";
import { animeCustomData } from "@/data/animeCustomNames";
import { getCustomAnimeName } from "@/services/getCustomAnimeName";
import AnimeHomepageCard from "../../animeCard/AnimeHomepageCard";



const customNames = animeCustomData;

export default function CarrouselYear (){

    const [audioPermission , setAudioPermission] = useState(false);

    const result = useQueries({
        queries: customNames.map(name => {
            return {
                queryKey: ['animes' , name],
                queryFn :() => getCustomAnimeName(name),
                staleTime: 1000 * 60 * 60,
            }
        })
    })

    const isLoading = result.some(result => result.isLoading);

    const animeData = result.flatMap(result => result.data?.anime || []);


    if (isLoading){
        return <CarouselSkeleton/>
    }


    return (
        <Carousel className="w-full" opts={{loop: true , align : "start"}} onClick={() => setAudioPermission(true)}>
            <CarouselContent className="-ml-4">
                {animeData?.map((value) => (
                    <CarouselItem className="pl-7" key={value.id}>
                                                
                        <AnimeHomepageCard anime={value} canPlayAudio={audioPermission} />
                                                
                    </CarouselItem>
                    ))}
            </CarouselContent>
                                
        </Carousel>
        )
                
    
}

