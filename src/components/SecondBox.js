
export const SecondBoxContent =({title, text, textBtn, urlBtn, block}) =>{

return(
<section className="bg-gray-200/20 rounded-md mx-4 
mt-4 py-4">

<div className="border border-green-700 rounded-md mx-4 pb-5">

<h2 className="text-2xl text-center py-4 font-bold md:text-3xl px-4">{title}</h2>
<p className="text-justify px-12 md:text-xl h-full">{text}</p>

<div className={`flex justify-center mt-5 ${block}`}>
<button className="bg-red-300 text-black font-bold px-3 py-1 rounded-md md:py-2">
    
  <a href={urlBtn} target="_blank">{textBtn}</a>  
    </button>
</div>
     
</div>

</section>)
};






              

