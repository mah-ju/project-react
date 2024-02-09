import { AlignJustify } from "lucide-react";


export const Header = ({ text, onMenuClick }) => {


    return (
        <header className="text-3xl md:text-5xl font-bold
         bg-gray-200/20 rounded-md py-4 h-24 mt-4 mx-4">

            <div className="flex flex-col justify-center items-center">

                <h1 className="pb-2">{text}</h1>

                <button className="md:hidden">
                    <AlignJustify onClick={onMenuClick} />
                </button>


            </div>

        </header>)


};


