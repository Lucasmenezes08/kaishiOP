import { useQueries } from "@tanstack/react-query";
import { useState } from "react";
import getAnimeYear from "../../../../services/getAnimeYear";
import { Carousel , CarouselContent , CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import AnimeCardComponent from "../../animeCard/AnimeCardComponent";
import { CarouselSkeleton } from "../../animation/animation-skeleton";



const years = [2025 , 2024 , 2023 , 2022 , 2021 , 2020 , 2019, 2018, 2017 , 2016 , 2015 , 2014 , 2013 , 2012 , 2011 , 2010];


export default function CarrouselYear (){

    const [audioPermission , setAudioPermission] = useState(false);

    const result = useQueries({
        queries: years.map(year => {
            return {
                queryKey: ['animes' , year],
                queryFn :() => getAnimeYear(year),
                staleTime: 1000 * 60 * 60,
            }
        })
    })




    return (
        <section className="min-h-screen md:p-15 p-4 " onClick={() => setAudioPermission(true)}>
            <h1>Animes por ano</h1>
            <section className="space-y-12">

            
            {result.map ((anime , index) => {
                const yearToShow = years[index];

                if (anime.isLoading){
                    return <CarouselSkeleton/>
                }

                if (anime.error){
                    return null;
                }

                const animeData = anime.data?.anime;

                return (
                    <section className="w-full flex items-center flex-col" key={yearToShow}>
                        <p>{`Aberturas de ${yearToShow}`}</p>
                        <Carousel className="w-full" opts={{loop: true , align : "start"}}>
                            <CarouselContent className="-ml-4">
                                {animeData?.map(value => (
                                    <CarouselItem className="pl-7 basis-1/2 md:basis-1/3 lg:basis-1/5 xl:basis-1/7" key={value.id}>
                                        
                                        <AnimeCardComponent anime={value} canPlayAudio={audioPermission} />
                                        
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious  className="hidden md:flex bg-transparent border-none text-xl"/>
                            <CarouselNext  className="hidden md:flex bg-transparent border-none text-xl"/>
                        </Carousel>
                    </section>
                )
            })}
            </section>
        </section>
        )

}

