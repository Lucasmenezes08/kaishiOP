import type { AnimeCard} from "../../../types/type-services/animeThemeTypes";
import { useEffect, useRef, useState } from "react";
import { Opacity } from "../animation/animation-opacity";
import ButtonCarroussel from "../utility/buttonCarroussel";



interface AnimeCardProps {
    anime : AnimeCard;
    canPlayAudio: boolean;
}


export default function AnimeHomepageCard ({anime ,canPlayAudio}:AnimeCardProps):any{
    const [isHovered, setIsHovered] = useState(false);
    const [isVideoLoading , setIsVideoLoading] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    


    //const coverImage = anime.images.find(img => img.facet === 'Cover Large' || 'Cover Small')?.link;

    const firstOpeningVideo = anime.animethemes
    ?.find(theme => theme.slug === 'OP1')
    ?.animethemeentries[0]?.videos[0]?.link;


    useEffect(() => {
        const videoElement = videoRef.current;
        if (!videoElement) return;    

        if (isHovered && firstOpeningVideo) {
        
            videoElement.play().catch(err => console.error("Autoplay bloqueado", err));
        } else {
            videoElement.pause();
            videoElement.currentTime = 0;
        }
    }, [isHovered, firstOpeningVideo]); 

    
    const handleTimeUpdate = () => {
        const videoElement = videoRef.current;
        if (videoElement && videoElement.currentTime >= 30) {
            videoElement.currentTime = 0;
        }
        console.log (videoElement?.currentTime);
    };

    

    return (
        <section className="flex justify-center items-center">

            <section className="relative w-full h-full aspect-video overflow-hidden shadow-lg cursor-pointer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            
                {isHovered && firstOpeningVideo ? (
               
                <video
                    ref={videoRef}
                    key={anime.id}
                    className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300"
                    style={{ opacity: isHovered && firstOpeningVideo ? 0.75 : 0 }}
                    src={firstOpeningVideo}
                    muted={!canPlayAudio}
                    playsInline
                    preload="metadata" 
                    onWaiting={() => setIsVideoLoading(true)}
                    onPlaying={() => setIsVideoLoading(false)}
                    onTimeUpdate={handleTimeUpdate} 
                >
                </video>
                
                    
            ) : (
                <Opacity/>

            )}

            {isHovered && isVideoLoading && <Opacity/>}

            <section className="absolute inset-0 top-[25%] left-[7%]">
                <h3 className="overflow-wrap w-[70%] font-bold text-5xl mb-10">{anime.name}</h3>
                <p className={`${isVideoLoading ? "text-gray-300 overflow-wrap w-[60%] text-left text-md font-medium transition ease-in-out delay-1000" : " transition-opacity opacity-1 ease-in-out delay-500"}`}>{anime.synopsis}</p> 

                <section className="fixed flex flex-row mt-7 gap-6">
                    <ButtonCarroussel text={"Mais informações"} style={"text-lg font-semibold flex items-center justify-center w-45 h-15 bg-slate-200 solid border-gray-100 text-black rounded-2xl cursor-pointer hover:bg-slate-300 hover:border-gray-200"}/>
                    <ButtonCarroussel text={"Avaliar"} style={"text-lg font-semibold flex items-center justify-center w-45 h-15 bg-red-500 solid border-gray-100 text-white rounded-2xl cursor-pointer hover:bg-red-600 hover:border-gray-200"} />
                </section>  
            </section>
            
            
        </section>
            
       

        </section>
        
    )
}