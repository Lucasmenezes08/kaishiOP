import { useQueries } from "@tanstack/react-query";
import { Carousel , CarouselContent , CarouselItem} from "@/components/ui/carousel";
import { CarouselSkeleton } from "../../animation/animation-skeleton";
import { animeCustomData } from "@/data/animeCustomNames";
import { getCustomAnimeName } from "@/services/getCustomAnimeName";
import { type CarouselApi } from "@/components/ui/carousel";
import AnimeHomepageCard from "../../animeCard/AnimeHomepageCard";
import { useEffect, useState , useRef } from "react";
import Autoplay from "embla-carousel-autoplay";



const customNames = animeCustomData;

export default function CarrouselYear (){

    const [audioPermission , setAudioPermission] = useState(false);
    const [api , setApi] = useState<CarouselApi>();

    useEffect (()=> {

        const interval = setInterval(() => {
            if (api?.canScrollNext()){
                api.scrollNext();
                console.log ("OP passada");
            }

            else {
                api?.scrollTo(0);
                console.log ("OP reiniciada");
            }
        } , 30 * 1000);

        return () => clearInterval(interval);
        

    }, [api]);

    const plugin = useRef(
    Autoplay({ delay:36 * 1000 , stopOnInteraction: true }) 
  );

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
        <Carousel plugins={[plugin.current]} setApi={setApi} className="w-full" opts={{loop: true , align : "start"}} onClick={() => setAudioPermission(true)} onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}>
            <CarouselContent className="-ml-20">
                {animeData?.map((value) => (
                    <CarouselItem className="pl-7" key={value.id}>
                                                
                        <AnimeHomepageCard anime={value} canPlayAudio={audioPermission}/>
                                                
                    </CarouselItem>
                    ))}
            </CarouselContent>
                                
        </Carousel>
        )  
}