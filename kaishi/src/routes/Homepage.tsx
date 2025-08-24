import CarrouselYear from "@/components/common/carroussel-homepage/carroussel-year/carroussel-year";



export default function Homepage (){

    return (
        <section className="w-full h-screen bg-slate-950 text-white flex flex-col overflow-auto ">
            <h1>Animes da temporada</h1>
            <CarrouselYear/>
        </section>
    )
}