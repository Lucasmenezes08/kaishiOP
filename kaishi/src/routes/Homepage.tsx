import { useAnimes } from "../hooks/UseAnimes"
import AnimeCardComponent from "../components/common/animeCard/AnimeCardComponent"
import { useState } from "react";



export default function Homepage (){

    const {data , isLoading , error} = useAnimes();
    const [audioPermission , setAudioPermission] = useState(false);

    if (isLoading){
        return <p>Carregando...</p>   
    }

    if (error){
        return <p>erro : {error.message}</p>
    }

    return (
        <section>
            <h1>Animes da temporada</h1>
            <section onClick={() => setAudioPermission(true)}>
                {data?.anime.map(anime => (
                    <AnimeCardComponent key={anime.id} anime={anime} canPlayAudio={audioPermission}/>
                ))}
            </section>
        </section>
    )
}