import { useQueries } from "@tanstack/react-query";
import { useState } from "react";
import getAnimeYear from "../../../../services/getAnimeYear";
import { Carousel , CarouselContent , CarouselItem , CarouselNext , CarouselPrevious } from "@/components/ui/carousel";
import AnimeCardComponent from "../../animeCard/AnimeCardComponent";


const years = [2025 , 2024 , 2023 , 2022 , 2021 , 2020 , 2019, 2018, 2017 , 2016 , 2015 , 2014 , 2013 , 2012 , 2011 , 2010];


export default function CarrouselYear (){

    const [audioPermission , setAudioPermission] = useState(false);

    const result = useQueries({
        queries: years.map(year => {
            return {
                queryKey: ['animes' , 'year'],
                queryFn :() => getAnimeYear(year),
                staleTime: 1000 * 60 * 60,
            }
        })
    })




    return (
        <section onClick={() => setAudioPermission(true)}>
            <h1>Animes por ano</h1>

            {result.map ((anime , index) => {
                const yearToShow = years[index];

                if (anime.isLoading){
                    return <p>Carregando</p>
                }

                if (anime.error){
                    return <p>Erro ao buscar dados</p>
                }

                const animeData = anime.data?.anime;

                return (
                    <section key={yearToShow}>
                        <p>{`Aberturas de ${yearToShow}`}</p>
                        <Carousel>
                            <CarouselContent>
                                {animeData?.map(value => (
                                    <CarouselItem key={value.id}>
                                        <AnimeCardComponent anime={value} canPlayAudio={audioPermission}/>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </section>
                )
            })}
        </section>
        )

}

