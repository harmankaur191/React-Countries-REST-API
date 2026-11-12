import { useState } from 'react'
import Data from '../data.json'
export default function useFetch(){
     const [data, setData] = useState(Data);
    
    console.log(data)
return{data}
}