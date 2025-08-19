import CarrouselYear from "@/components/common/carroussel-homepage/carroussel-year/carroussel-year";



export default function Homepage (){

    return (
        <section className="w-full flex items-center justify-center flex-col">
            <h1>Animes da temporada</h1>
            <CarrouselYear/>
        </section>
    )
}