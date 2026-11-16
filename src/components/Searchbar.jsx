import { useContext, useEffect, useState } from "react"
import useFetch from "../hooks/useFetch";
import { SearchContext } from "../context/SearchContext";

export default function Searchbar(){
   
    const {searchItem, setSearchItem} = useContext(SearchContext);
    const handleChange=(e)=>{
        const searchInput = e.target.value;
        console.log(searchInput);
        setSearchItem(searchInput);
    }
  
    return(
        <input type='text' id='search' value={searchItem} onChange={handleChange} placeholder='Search for a country' className="shadow-[0_0_15px_rgba(0,0,0,0.25)] max-w-fit rounded-sm p-2"/>
    )
}