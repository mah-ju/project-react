"use client"
import {Header} from "@/components/Header";
import { useState } from "react";
import { NavBar } from "@/components/NavBar";
import { BoxContent } from "@/components/BoxContent";
import { ScreenNav } from "@/components/ScreenNav";
import { SecondBoxContent } from "@/components/SecondBox";
import { Footer } from "@/components/Footer";

export default function About() {

    const [navBarVisible, setNavBarVisible] = useState(false);
    const toggleNavBar = () => {
      setNavBarVisible(!navBarVisible);
    }
    return(
        <div>
            <Header
            text="My Favotite Things" 
            onMenuClick={toggleNavBar}
            />

<ScreenNav />
        {navBarVisible && <NavBar />}

<div className="md:flex">

<BoxContent 

title="Do you want to know something?"
img="/vestron.jpg"
borderColor="border-green-700"
position="left-3"
text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, 
by injected humour, or randomised words which don't look even slightly believable."

/>

<BoxContent 

title="The best you can listen"
img="/french-police.jpg"
borderColor="border-red-500"
position="right-3"
text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, 
by injected humour, or randomised words which don't look even slightly believable."

/>
</div>

     <SecondBoxContent
     
     title="The best gothic bands"
     text=" Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
     dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
     Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
     sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue."
     textBtn="Listen this"
     urlBtn="https://open.spotify.com/intl-pt/track/1bkx2vJHGvLipl6Afjpges?si=87e0bb6f11934239"
     />  
 
 <Footer />

        </div>
    )


}