import { CiSearch } from "react-icons/ci";


export default function Search ({}){
    return (
        <section className="flex items-center justify-center bg-gray-700 w-55 h-10 overflow-x-hidden rounded-2xl">
            <input className="text-gray-300 outline-none" type="text" placeholder="Pesquise um anime."/>
            <CiSearch size={20} className="text-gray-500"/>
        </section>
    )
}