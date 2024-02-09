
"use client"
import { useState } from "react";
import { Modal } from "@/components/Modal";

export const ContactBox = ({ onSubmit, modalOpen, setModalOpen }) =>{

const [name, setName] = useState("");
const [email, setEmail] = useState("");


const handleSubmit = (e) => {
  e.preventDefault();
  setModalOpen(true);
 onSubmit({name, email})

}

return(

  
<div className="bg-gray-200/20 rounded-md mx-4 mt-4 pb-4 md:flex md:flex-col items-center">


<h2 className="text-2xl md:text-3xl text-center font-bold py-4">Subscribe our Newsletter</h2>
<p className="text-justify px-12 md:text-xl">Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius.</p>

<form className="border border-green-700 mx-4 mt-4 rounded-md pb-4 flex flex-col items-center space-y-2 md:w-2/4" onSubmit={handleSubmit}>
<legend className="font-bold text-2xl py-4 md:text-3xl">Good Letter</legend>
  <div>
   <label htmlFor="name" className="md:text-lg">Name </label>
    <input type="text" id="name" value={name} className="py-1 bg-black/50 rounded-md outline-red-300 md:py-2" autoComplete="on"  onChange={(e) => setName(e.target.value)}></input>
  </div>
   
   <div>

   <label htmlFor="email" className="mr-1 md:text-lg">Email </label>
    <input type="email" id="email" value={email} className="py-1 bg-black/50 rounded-md outline-red-300 md:py-2" autoComplete="on"  onChange={(e) => setEmail(e.target.value)}></input>
   </div>

<div className="pt-5">
    <button className="bg-red-300 text-black font-bold px-3 py-1 rounded-md md:py-2">Subscribe</button>
</div>
</form>
{modalOpen && <Modal name={name} email={email} isOpen={modalOpen} onClose={() => setModalOpen(false)}/>}

</div>
    )
}