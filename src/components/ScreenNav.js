import Link from "next/link"
import { usePathname } from "next/navigation"

export const ScreenNav = () => {

const currentPath = usePathname();
    
const isCurrentPage = (path) =>{
return currentPath === path ? "border-b-2 border-green-700" : "";
  }


return(

<nav className="hidden md:block bg-gray-200/20 mx-4 mt-4 rounded-md h-16">

<ul className="flex justify-around font-bold text-xl h-full items-center">
<li className={`hover:border-b-2 border-green-700 ${isCurrentPage("/")}`}><Link href="/">HOME</Link></li>
<li className={`hover:border-b-2 border-green-700 ${isCurrentPage("/about")}`}><Link href="/about">ABOUT</Link></li>
<li className={`hover:border-b-2 border-green-700 ${isCurrentPage("/projects")}`}><Link href="/projects">PROJECTS</Link></li>
<li className={`hover:border-b-2 border-green-700 ${isCurrentPage("/contact")}`}><Link href="/contact">CONTACT</Link></li>
</ul>
</nav>

)}