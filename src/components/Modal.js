

export const Modal = ({name, email, isOpen, onClose}) =>{

  if(!isOpen)  {
    return null;
  }
    
    return(
        
<div className="flex justify-center items-center bg-black/80 w-full h-full fixed top-0 left-0">

<div className="bg-gray-300 pb-5 w-4/5 md:w-[550px] rounded-md text-black flex flex-col items-center">


<p className="font-bold text-2xl px-10 pt-6 text-center pb-4">Welcome to our community</p>

<p className="text-black px-6 text-justify md:text-lg">Hi, <span className="font-bold">{name}</span>! Welcome to our community! We appreciate your interest in our newsletter. Your email, <span className="font-bold">{email}</span> was subscribed successfully, now you're now part of our community!
</p>

<button type="submit" className="px-5 py-1 rounded-md font-medium bg-green-700/60 mt-2 md:mt-5 md:px-7" onClick={onClose}>ok</button>
</div>
</div>
    )
}