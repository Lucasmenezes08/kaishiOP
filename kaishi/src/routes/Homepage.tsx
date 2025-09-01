import CarrouselMain from "@/components/common/carroussel-homepage/carroussel-main/carroussel-main";
import CarrouselYear from "@/components/common/carroussel-homepage/carroussel-year/carroussel-year";



export default function Homepage (){

    return (
        <section className="w-full h-screen bg-slate-950 text-white flex flex-col overflow-auto ">
            <h1>Animes da temporada</h1>
            <section className="w-full h-[30vh]">
                <CarrouselMain/>
            </section>
            <CarrouselYear/>
        </section>
    )
}