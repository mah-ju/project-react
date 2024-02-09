
export const BoxContent = ({ title, img, altText, text, borderColor, position }) => {
    return (
        <section className="bg-gray-200/20 rounded-md mx-4 mt-4 py-4">
            <div className="flex flex-col items-center space-y-3">
            <h2 className="text-2xl font-bold text-center md:text-3xl">{title}</h2>
            <div className={`border-2 rounded-full ${borderColor}`}>
            <img src={img} alt={altText} className={`w-48 rounded-full relative ${position}`} />
            </div>
            <p className="text-justify px-12 md:text-xl">{text}</p>
            </div>  
        </section>)
};