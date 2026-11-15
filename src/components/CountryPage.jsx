import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch";
import back from '../assets/design/white-back.png'
import blackback from '../assets/design/back.png'
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function CountryPage() {
    const {theme}= useContext(ThemeContext)
   
    const { data } = useFetch();
    const { alpha2code } = useParams();
    const country = data.find((c) => c.alpha2Code === alpha2code);
    const languages = country.languages.map(language => language.name).join(',');
   
    return (
        <div className="flex flex-col gap-10 p-5 min-h-screen">
            <div>
                <button className="shadow-xl shadow-black/50 py-1 px-3 border-1 border-gray-700 rounded-sm flex "><img src={theme === 'light'?blackback:back} className="w-[25px]"/>Back</button>
            </div>
            <div className=" grid grid-cols-2 gap-20">
                <section> <img src={country.flag} /></section>
                <div className="flex flex-col gap-10 p-5">
                    <h1 className="text-2xl font-bold">{country.name}</h1>
                    <div className="grid grid-cols-2 gap-10">
                        <section className="flex flex-col gap-3">
                            <p><label>Native Name: </label>{country.nativeName}</p>
                            <p><label>Population: </label>{country.population}</p>
                            <p><label>Region: </label>{country.subregion}</p>
                            <p><label>Capital: </label>{country.capital}</p>
                        </section>
                        <section className="flex flex-col gap-3">
                            <p><label>Top Level Domain: </label>{country.topLevelDomain}</p>
                            <p><label>Currencies: </label>{country.currencies[0].name}</p>
                            <p><label>Languages: </label>{languages}
                            </p>
                        </section>
                    </div>
                    <div className="flex flex gap-5"><label>Border Countries: </label>
                    {country.borders.map((bordername)=>{
                        return <button key={bordername} className="shadow-xl shadow-black/50 border-1 border-gray-700 gap-10 px-3 rounded-sm">{bordername}</button>
                    })
                       
                    }
                    </div>
                </div>

            </div>
        </div>

    )
}