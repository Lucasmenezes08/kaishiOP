import CarrouselMain from "@/components/common/carroussel-homepage/carroussel-main/carroussel-main";
import CarrouselYear from "@/components/common/carroussel-homepage/carroussel-year/carroussel-year";
import NavBar from "@/components/common/nav/navBar/navBar";



export default function Homepage (){

    return (
        <section className="w-full h-screen  bg-[#1a202c] text-white flex flex-col overflow-auto ">
            <NavBar/>
            <CarrouselMain/>
            <CarrouselYear/>
        </section>
    )
}