import type { AnimeCard} from "../../../types/type-services/animeThemeTypes";
import { useEffect, useRef, useState } from "react";
import { Spinner } from "../animation/animation-spinner";

interface AnimeCardProps {
    anime : AnimeCard;
    canPlayAudio: boolean
}


export default function AnimeCardComponent ({anime ,canPlayAudio}:AnimeCardProps):any{
    const [isHovered, setIsHovered] = useState(false);
    const [isVideoLoading , setIsVideoLoading] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);



    

    const coverImage = anime.images.find(img => img.facet === 'Cover Large' || 'Cover Small')?.link;

    const firstOpeningVideo = anime.animethemes
    ?.find(theme => theme.slug === 'OP1')
    ?.animethemeentries[0]?.videos[0]?.link;

    useEffect(() => {
        const videoElement = videoRef.current;
        
        if (!videoElement){
            return;
        }

        function handleUpdate (){
            if (videoElement != null){
                if (videoElement?.currentTime >= 20){
                    videoElement.currentTime = 0;
                }
            }
           
        }

        function handleWaiting (){
            setIsVideoLoading(true);
        }

        function handlePlaying (){
            setIsVideoLoading(false)
        }

        if (isHovered && firstOpeningVideo){
            videoElement.muted = !canPlayAudio;
            setIsVideoLoading(true); 

            videoElement.play().catch(err => {
                console.error("Autoplay bloqueado", err);
                setIsVideoLoading(false)
            })


            videoElement.addEventListener('timeupdate', handleUpdate);
            videoElement.addEventListener('waiting', handleWaiting);
            videoElement.addEventListener('playing', handlePlaying);
        }

        else {
            videoElement.pause();
            videoElement.currentTime = 0;
            setIsVideoLoading(false); 
            
           
            videoElement.removeEventListener('timeupdate', handleUpdate);
            videoElement.removeEventListener('waiting', handleWaiting);
            videoElement.removeEventListener('playing', handlePlaying);
        }

        return () => {
            if (videoElement) {
                
                videoElement.removeEventListener('timeupdate', handleUpdate);
                videoElement.removeEventListener('waiting', handleWaiting);
                videoElement.removeEventListener('playing', handlePlaying);
            }
        };

    } , [isHovered , firstOpeningVideo , canPlayAudio]);


    return (
        <section className="flex flex-col justify-center items-center">

            <section className="relative w-full h-full aspect-[3/4] rounded-lg overflow-hidden shadow-lg cursor-pointer group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <section className="">
                    {isHovered && firstOpeningVideo ? (
                    <video
                        key={anime.id}
                        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300"
                        style={{ opacity: isHovered && firstOpeningVideo ? 1 : 0 }}
                        src={firstOpeningVideo}
                        autoPlay
                        muted={!canPlayAudio}
                        loop
                        playsInline
                        preload="metadata" 
                    >
                    </video>
                    
                    
                ) : (
                    <img 
                        className="absolute inset-0 w-full h-full object-cover" 
                        src={coverImage || '/placeholder.png'}
                        alt={`capa de ${anime.name}`}
                    >
                    </img>

                )}

                {isHovered && isVideoLoading && <Spinner />}

            </section>

                
            </section>
            
            <section>{anime.name}</section>

        </section>
        
    )
}