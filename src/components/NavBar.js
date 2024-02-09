import Link from "next/link";
import { usePathname } from "next/navigation";


export const NavBar =() =>{

    const pathName = usePathname();

    const currentPage = (path) =>{
return path === pathName ? "font-bold" : "";
    }

    return(
        <nav className="md:hidden">
            <ul className="text-xl px-4 flex flex-col items-center space-y-3 pt-3">
                <li className={`border-b border-green-700 w-full text-center pb-1 ${currentPage("/")}`}><Link href="/">HOME</Link></li>
                <li className={`border-b border-green-700 w-full text-center pb-1 ${currentPage("/about")}`}><Link href="/about">ABOUT</Link></li>
                <li className={`border-b border-green-700 w-full text-center pb-1 ${currentPage("/projects")}`}><Link href="/projects">PROJECTS</Link></li>
                <li className={`border-b border-green-700 w-full text-center pb-1 ${currentPage("/contact")}`}><Link href="/contact">CONTACT</Link></li>
            </ul>
        </nav>


    )
};
