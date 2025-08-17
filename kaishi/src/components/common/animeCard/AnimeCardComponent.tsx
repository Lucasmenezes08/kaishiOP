import type { AnimeCard} from "../../../types/type-services/animeThemeTypes";
import { useState } from "react";

interface AnimeCardProps {
    anime : AnimeCard;
    canPlayAudio: boolean
}


export default function AnimeCardComponent ({anime ,canPlayAudio}:AnimeCardProps):any{
    const [isHovered, setIsHovered] = useState(false);
    

    const coverImage = anime.images.find(img => img.facet === 'Cover Large')?.link;

    const firstOpeningVideo = anime.animethemes
    .find(theme => theme.slug === 'OP1')
    ?.animethemeentries[0]?.videos[0]?.link;


    return (
        <section className="" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
           
            {isHovered && firstOpeningVideo ? (
                <video
                    key={anime.id}
                    src={firstOpeningVideo}
                    autoPlay
                    muted={!canPlayAudio}
                    loop
                    playsInline
                >
                </video>
                
            ) : (
                <img 
                    src={coverImage}
                    alt={`capa de ${anime.name}`}
                >
                </img>
            )}
            <section>{anime.name}</section>
        </section>
    )
}