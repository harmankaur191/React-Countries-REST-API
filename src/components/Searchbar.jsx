import { useEffect, useState } from "react"
import useFetch from "../hooks/useFetch";

export default function Searchbar(){
    const {data}=useFetch();
    const [searchItem, setSearchItem] = useState('');
    const handleChange=(e)=>{
        const searchInput = e.target.value;
        console.log(searchInput);
        setSearchItem(searchInput);
    }
  
    return(
        <input type='text' id='search' value={searchItem} onChange={handleChange} placeholder='Search' className="border-black border-1 p-2"/>
    )
}