"use client"
import { Header } from "@/components/Header"
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { SecondBoxContent } from "@/components/SecondBox";
import { ScreenNav } from "@/components/ScreenNav";
import { useState } from "react";
import { Carrossel } from "@/components/Carrossel";

export default function Projects () {

const [navBarVisible, setNavBarVisible] = useState(false);
  const toggleNavBar = () => {
    setNavBarVisible(!navBarVisible);
  }
    return(
        
        <div>
          
          <Header 
          text="My Favorite Things"
          onMenuClick={toggleNavBar}
          />

         {navBarVisible && <NavBar />}

         <ScreenNav />

         <Carrossel />
   <div className="md:flex">
   <SecondBoxContent 
         title="Known our partners and the job we do"
         text="Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
         dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
         Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue."
        block="hidden"
      
          
         />
        <SecondBoxContent 
         title="Great opportunity to enjoy our community"
         text="Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor condimentum
         orci suscipit. Leo maecenas in tristique, himenaeos elementum placerat. Taciti rutrum nostra,
         eget cursus velit ultricies. Quam molestie tellus himenaeos cubilia congue vivamus ultricies.
         Interdum praesent ut penatibus fames eros ad consectetur sed."
         block="hidden"
        
        />
   </div>

      <SecondBoxContent
      title="The best you can do for yourself"
      text="Taciti rutrum nostra,
      eget cursus velit ultricies. Quam molestie tellus himenaeos cubilia congue vivamus ultricies.
      Interdum praesent ut penatibus fames eros ad consectetur sed"
      textBtn="Go to plans"
      
      
      />   

<Footer />

 </div>
    )
}