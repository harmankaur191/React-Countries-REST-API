import { createContext } from "react";
import { useState } from "react";
export const FilterContext = createContext();
export function FilterContextProvider({children}){
    const [filter, setFilter] =useState('all');

    return(
        <FilterContext.Provider value={{filter,setFilter}}>
            {children}
        </FilterContext.Provider>
    );
}