import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch";

export default function CountryPage() {
    const { data } = useFetch();
    const { alpha2code } = useParams();
    console.log(alpha2code);
    const country = data.find((c) => c.alpha2Code === alpha2code);
    console.log(country.name);
    console.log(country.currencies[0].name)
    console.log(country.languages)
    const languages = country.languages.map(language => language.name).join(',');
    console.log(languages)
    return (
        <div className="flex flex-col gap-10 p-5 min-h-screen">
            <div>
                <button className="shadow-lg py-1 px-3 border-1 border-gray-700">Back</button>
            </div>
            <div className=" grid grid-cols-2 gap-20">
                <section> <img src={country.flag} /></section>
                <div className="flex flex-col gap-10">
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
                </div>

            </div>
        </div>

    )
}