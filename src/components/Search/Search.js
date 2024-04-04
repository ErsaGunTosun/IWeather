import React, { useState} from 'react'
import { useSelector, useDispatch } from "react-redux";

// Utils
import getCurrentWeather from "../../utils/getWeather";

// Icons
import { FaSearch } from "react-icons/fa";

// Data
import cities from '../../mocks/cities'

function Search({setCoords}) {
    const units = useSelector((state) => state.units.value)
    const [searchResults, setSearchResults] = useState([])
    const [focus, setFocus] = useState(false)
    const dispatch = useDispatch()


    const handleSearch = (e) => {
        if (e.target.value.length < 4) {
            setSearchResults([])
        }
        if (e.target.value.length > 4) {
            let results = cities.filter(city => city.name.toLowerCase().includes(e.target.value.toLowerCase()))
            setSearchResults(results)
        }
    }

    const goCity = (e) => {
        console.log(e)
        console.log([e.lat, e.lng])
        setCoords([e.lat, e.lng])
        getCurrentWeather([e.lat, e.lng], dispatch, units)
    }




    return (
        <>
            <div className="flex items-center justify-end basis-full md:basis-4/5 lg:basis-3/6 order-last md:order-2">
                <div className="relative block w-full">

                    <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
                        <FaSearch size={20} className='text-gray-200 ' />
                    </div>

                    <input type="text" id="search-navbar"
                        className="block w-full p-3 pe-10 bg-gray-600 text-base text-gray-200 rounded-md focus:outline-none "
                        placeholder="Search..." autoComplete='off'
                        onChange={(e) => handleSearch(e)} onFocus={() => setFocus(true)} />


                    {

                        searchResults.length > 0 && focus ?

                            <div className='absolute searchRslt bg-gray-500 top-14 py-4 px-2 w-full flex flex-col gap-2 rounded-md max-h-48 overflow-y-scroll'
                                onMouseEnter={() => setFocus(true)} onMouseLeave={() => setFocus(false)} >
                                {searchResults.map((city, index) => {
                                    return (
                                        <div key={index} onClick={(e) => goCity(city)} className='text-white bg-gray-600 p-2 rounded-md cursor-pointer'>
                                            {city.name}, {city.country}
                                        </div>)
                                })}
                            </div>
                            :
                            ""

                    }

                </div>


            </div>

        </>
    )
}

export default Search