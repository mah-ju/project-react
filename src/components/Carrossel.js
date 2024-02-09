import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { images } from "@/data/arrayFotos";
export const Carrossel = () => {

 
    
const [currentImage, setCurrentImage] = useState(0)

const nextImage = () =>{
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length)
}

const prevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length)
}
    return(
    <section className="bg-gray-200/20 mx-4 mt-4 mb-4 rounded-md py-4 flex flex-col justify-center">
      <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold md:text-3xl pb-2">See our music projects</h2>
      <p className="text-justify px-12 pb-3 md:text-xl">Lorem  consectetuer adipiscing elit lorem fodase.</p>
      </div>
     
      <div className="flex items-center space-x-1 justify-center mt-3">
    <ChevronLeft size={29} className="stroke-green-700 cursor-pointer" onClick={prevImage} />
      <img src={images[currentImage].path} alt={images[currentImage].alt} className="max-w-[80%] md:max-w-[60%] mx-auto rounded-md" />
      <ChevronRight size={29} className="stroke-green-700 cursor-pointer" onClick={nextImage} />
      </div>
   

        </section>
    )

}