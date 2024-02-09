
import { MapPin, Instagram, Linkedin, Twitter } from "lucide-react"
export const Footer = () =>{
    return(

    
    <div className="bg-gray-200/20 rounded-md mx-4 h-36 mt-4 mb-4 flex justify-around ">

<div className=" flex flex-col items-center justify-center">
   
    <p className="font-bold pb-1 text-sm md:text-lg">Gothic Night Club</p>
    <ul className="text-gray-400/70 mt-1 text-xs md:text-sm">
        <li>&copy; 2024 | Company 
        </li>
        <li>All rights reserved
        </li>
<li>
  Privacy and Terms
</li>

    </ul>
</div>

<div className=" flex flex-col items-center justify-center text-xs md:text-sm">
<MapPin className="md:w-8 h-8" />
<p className="text-gray-400/70 pt-2">123 Main Street</p>
<p className="text-gray-400/70">Cityville, State 78901</p>
<p className="text-gray-400/70">United States</p>
</div>

<div className="flex space-x-3 items-center md:space-x-5">

<a href="#">
<Instagram className="md:w-10 h-10"/>
</a>

<a href="#">
<Linkedin className="md:w-10 h-10" />
</a>
<a href="#">
<Twitter className="md:w-10 h-10"/>
</a>

</div>
        </div>
    )
}