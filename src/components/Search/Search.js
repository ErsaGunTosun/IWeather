import React from 'react'

// Icons
import { FaSearch } from "react-icons/fa";

function Search() {
    return (
        <div className="flex items-center justify-end basis-full md:basis-4/5 lg:basis-3/6 order-last md:order-2 ">
            <div className="relative block w-full">
                
                <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
                    <FaSearch size={20} className='text-gray-200 ' />
                </div>

                <input type="text" id="search-navbar" className="block w-full p-3 pe-10 bg-gray-600 text-base text-gray-200 rounded-md focus:outline-none " placeholder="Search..." />
            </div>
        </div>
    )
}

export default Search