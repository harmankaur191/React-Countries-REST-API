import { useContext } from "react";
import useFetch from "../hooks/useFetch"
import { FilterContext } from "../context/FilterContext";
export default function CountriesPage(){
   const {data} = useFetch();
   const {filter}=useContext(FilterContext);
   const filteredCountries = filter ==='all'?data:
   data.filter((country)=>country.region===filter);

    return(
        <div >
            <ul className="text-black grid grid-cols-4 gap-[5vw]">
                {filteredCountries?.map((country, alpha2Code)=>{
                   return <li key={alpha2Code} className=" rounded-sm shadow-xl h-[25vw] ">
                    {<img src={country.flag} className="h-[20vw]"/>}
                    {country.name}
                   <p><label>Region: </label>{country.region}</p> 
                    <p><label>Capital: </label>{country.capital}</p> 
                    </li>
                })}
            </ul>

        </div>
    )
}