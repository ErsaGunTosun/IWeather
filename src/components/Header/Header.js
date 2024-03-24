import React from 'react'

// Components
import Search from '../Search/Search';

// Icons
import { FaLightbulb, FaCloud } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";


function Header() {
    return (
        <nav className="bg-transparent">
            <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4 md:flex-nowrap ">
                <div className="basis-3/5 order-first flex items-center md:justify-start lg:justify-center md:me-2  md:basis-1/5">
                    <a href="#" className='flex'>
                        <FaCloud className='text-blue-light text-2xl me-1 mb-2' />
                        <span className="self-center text-2xl font-bold whitespace-nowrap text-white ">IWeather</span>
                    </a>
                </div>

                <Search />

                <div className='flex items-center justify-end  basis-2/5 order-2 mb-2 md:mb-0 md:justify-end lg:justify-start md:basis-1/5  md:order-last lg:basis-1/4 '>
                    <button type="button" class="bg-gray-600 px-4 py-3.5 ms-2 rounded-md transition ease-in-out delay-50 hover:scale-95">
                        <IoLocationSharp size={20} className='text-gray-200' />
                    </button>
                    <button type="button" class=" bg-gray-600 px-4 py-3.5 ms-2 rounded-md transition ease-in-out delay-50 hover:scale-95">
                        <FaLightbulb size={20} className='text-gray-200 ' />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Header