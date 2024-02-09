"use client"
import { Header } from "@/components/Header";
import { NavBar } from "@/components/NavBar";
import { ScreenNav } from "@/components/ScreenNav";
import { useState } from "react";
import { ContactBox } from "@/components/ContactBox";
import { SecondBoxContent } from "@/components/SecondBox";
import { Footer } from "@/components/Footer";

export default function Contact() {

    const [navBarVisible, setNavBarVisible] = useState(false);
    const toggleNavBar = () => {
    setNavBarVisible(!navBarVisible);
    }

    const [modalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: ""})

const handleSubmit = ({name, email}) =>{
  setFormData({name, email});
  setModalOpen(true);
}


  return(

  <div>


 <Header
 text="My Favorite Things"
 onMenuClick={toggleNavBar}
 
 />

 {navBarVisible && <NavBar />}

<ScreenNav />

<ContactBox onSubmit={handleSubmit} modalOpen={modalOpen} setModalOpen={setModalOpen} setFormData={setFormData} />

<SecondBoxContent
title="Receive the best content"
block="hidden"
text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac purus libero. Quisque congue ornare turpis eget varius. Donec in nisi bibendum, ultrices nisl at, feugiat mauris. In hac habitasse platea dictumst. Nullam faucibus massa nec mauris fringilla, quis ornare erat condimentum. Aliquam erat volutpat. In varius lacus sit amet massa imperdiet vestibulum. Etiam a accumsan erat. Quisque interdum justo vitae ipsum tempus commodo. 
Nullam commodo aliquam dui ut mattis. "

/>

<Footer />

 </div>
    )
}