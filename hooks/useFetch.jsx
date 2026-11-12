import { useContext, useState } from 'react'
import Data from '../data.json'
import { FilterContext } from '../context/FilterContext';
export default function useFetch(){
    // const {filter,setFilter}=useContext(FilterContext)
    const [data, setData] = useState(Data);

    
    return{data,setData}
}