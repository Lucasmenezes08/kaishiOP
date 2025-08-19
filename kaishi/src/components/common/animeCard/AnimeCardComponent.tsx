import type { AnimeCard} from "../../../types/type-services/animeThemeTypes";
import { Suspense, useState } from "react";

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
        <section className="relative w-full h-full rounded-lg overflow-hidden shadow-lg cursor-pointer group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
           <section className="">
                {isHovered && firstOpeningVideo ? (
                    <Suspense fallback={<p>Carregando</p>}>
                        <video
                            key={anime.id}
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            src={firstOpeningVideo}
                            autoPlay
                            muted={!canPlayAudio}
                            loop
                            playsInline
                        >
                        </video>
                    </Suspense>
                
            ) : (
                <img 
                    src={coverImage || '/placeholder.png'}
                    alt={`capa de ${anime.name}`}
                >
                </img>
            )}

           </section>
            <section>{anime.name}</section>
        </section>
    )
}