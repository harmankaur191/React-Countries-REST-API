import { useContext, useState } from "react";
import useFetch from "../hooks/useFetch";
import { FilterContext } from "../context/FilterContext";

export default function Filter() {
    const { filter, setFilter } = useContext(FilterContext);
    const handleChange = (e) => {
        const filterBy = e.target.value;
        console.log(filterBy);
        setFilter(filterBy);
    }

    return (
        <div className="shadow-lg max-w-fit p-4">
            <select id="filter" onChange={handleChange}>
                <option value='all'>Filter by Region</option>
                <option value='Africa'>Africa</option>
                <option value='Asia'>Asia</option>
                <option value='Europe'>Europe</option>
                <option value='Oceania'>Oceania</option>
            </select>
        </div>
    )
}