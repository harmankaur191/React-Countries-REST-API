import useFetch from "../hooks/useFetch"
export default function CountriesPage(){
   const {data} = useFetch();

    return(
        <div >
            <ul className="text-black grid grid-cols-4 gap-[5vw]">
                {data?.map((country, alpha2Code)=>{
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