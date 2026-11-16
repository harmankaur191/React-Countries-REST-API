import { useContext } from "react";
import useFetch from "../hooks/useFetch"
import { FilterContext } from "../context/FilterContext";
import { Link } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
export default function CountriesPage(){
   const {data} = useFetch();
   const {filter}=useContext(FilterContext);
   const {searchItem} = useContext(SearchContext);
  
   const filteredCountries = data.filter((country)=>{
    const matchesRegion =!filter || filter==='all'||country.region?.toLowerCase()===filter.toLowerCase();
    const matchesSearch = !searchItem || country.name.toLowerCase().includes(searchItem.toLowerCase());

    return matchesRegion && matchesSearch;
   });
 
    return(
        <div className="p-5">
            {filteredCountries.length ===0 ?( <div className="min-h-screen">
                No match found!
            </div>):
            <ul className="text-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[5vw] ">
                {filteredCountries?.map((country, alpha2Code)=>{
                   return <li key={alpha2Code} className=" rounded-sm shadow-[0_0_15px_rgba(0,0,0,0.25)]  min-h-fit flex flex-col gap-3 min-h-[20vw]"><Link to={`/country/${country.alpha2Code}`}>
                    {<img src={country.flag} className="min-h-[] object-cover " alt={country.name+'s flag'}/>}
                    <div className="min-w-fit py-2 px-3">
                        <p><b>{country.name}</b></p> 
                   <p><label>Region: </label>{country.region}</p> 
                    <p><label>Capital: </label>{country.capital}</p> 
                    </div>
                   </Link>
                    </li>
                })}
            </ul>}
        </div>
    )
}