
"use client"
import React, { useState } from 'react';
import { Header } from "@/components/Header";
import { NavBar } from "@/components/NavBar";
import { BoxContent } from "@/components/BoxContent";
import { SecondBoxContent } from "@/components/SecondBox";
import { ScreenNav } from "@/components/ScreenNav";
import { Footer } from '@/components/Footer';

const Home = () => {

  const [navBarVisible, setNavBarVisible] = useState(false);
  const toggleNavBar = () => {
    setNavBarVisible(!navBarVisible);
  }
  return(
  <div>   

<div>
  
<Header 
text="My Favorite Things"

onMenuClick={toggleNavBar}
/>

<ScreenNav />

{navBarVisible && <NavBar />}

</div>

<div className="md:flex">

<BoxContent

title="Somethings i want to say"
img="/perfil.jpg"
text="It is a long established fact that a reader will be distracted by the readable 
content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
normal distribution of letters,
 making it look like readable English."
 borderColor="border-green-700"
 position="left-3"

/>

<BoxContent 
title="Silence is the better choice(?)"
img="/perfil.jpg"
text="It is a long established fact that a reader will be distracted by the readable 
content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
normal distribution of letters,
 making it look like readable English."
borderColor="border-red-500"
position="right-3"

/>
</div>

<SecondBoxContent

title="A mix of good sounds"
text="Lorem Ipsum is not simply random text. 
It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
textBtn="Go to playlist"
urlBtn="https://open.spotify.com/playlist/6pSVQuXHgdL4ly8gB2AK3I?si=033d3bf6d1f947cc"
/>

<Footer />

  </div>

  )
}

export default Home;