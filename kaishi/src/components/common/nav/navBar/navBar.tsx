import { LinkText } from "../links/link";
import Search from "../search/Search";

export default function NavBar ({}){
    return (
        <nav className="flex items-center justify-between px-10 py-3">
            <section className="flex justify-around items-center gap-20">
                <LinkText name={"Home"}/>
                <LinkText name={"Categorias"}/>
                <LinkText name={"Profile"}/>
            </section>
            <Search/>
        </nav>
    )
}