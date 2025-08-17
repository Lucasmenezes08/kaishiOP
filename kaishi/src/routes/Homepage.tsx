import { useAnimes } from "../hooks/UseAnimes"
import AnimeCardComponent from "../components/common/animeCard/AnimeCardComponent"



export default function Homepage (){

    const {data , isLoading , error} = useAnimes();

    if (isLoading){
        return <p>Carregando...</p>   
    }

    if (error){
        return <p>erro : {error.message}</p>
    }

    return (
        <section>
            <h1>Animes da temporada</h1>
            <section>
                {data?.anime.map(anime => (
                    <AnimeCardComponent key={anime.id} anime={anime}/>
                ))}
            </section>
        </section>
    )
}