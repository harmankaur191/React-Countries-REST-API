import { useContext } from "react";
import useFetch from "../hooks/useFetch"
import { FilterContext } from "../context/FilterContext";
import { Link } from "react-router-dom";
export default function CountriesPage(){
   const {data} = useFetch();
   const {filter}=useContext(FilterContext);
  
   const filteredCountries = filter ==='all'?data:
   data.filter((country)=>country.region===filter);
  
    return(
        <div >
            <ul className="text-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols3 lg:grid-cols-4 gap-[5vw] ">
                {filteredCountries?.map((country, alpha2Code)=>{
                   return <li key={alpha2Code} className=" rounded-sm shadow-xl min-h-fit flex flex-col gap-3 min-h-[20vw]"><Link to={`/country/${country.alpha2Code}`}>
                    {<img src={country.flag} className="min-h-[] object-cover "/>}
                    <div className="min-w-fit py-2 px-3">
                        <p><b>{country.name}</b></p> 
                   <p><label>Region: </label>{country.region}</p> 
                    <p><label>Capital: </label>{country.capital}</p> 
                    </div>
                   </Link>
                    </li>
                })}
            </ul>

        </div>
    )
}