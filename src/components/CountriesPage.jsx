import { useContext } from "react";
import useFetch from "../hooks/useFetch"
import { FilterContext } from "../context/FilterContext";
import { Link } from "react-router-dom";
export default function CountriesPage(){
   const {data} = useFetch();
   const {filter}=useContext(FilterContext);
   const filteredCountries = filter ==='all'?data:
   data.filter((country)=>country.region===filter);
   const handleClick = (e) =>{
        const selectedCountry = e.target.key;
    

   }
    return(
        <div >
            <ul className="text-black grid grid-cols-4 gap-[5vw]">
                {filteredCountries?.map((country, alpha2Code)=>{
                   return <li key={alpha2Code} className=" rounded-sm shadow-xl h-[25vw] "><Link to={`/country/${country.alpha2Code}`}>
                    {<img src={country.flag} className="h-[20vw]"/>}
                    {country.name}
                   <p><label>Region: </label>{country.region}</p> 
                    <p><label>Capital: </label>{country.capital}</p> </Link>
                    </li>
                })}
            </ul>

        </div>
    )
}