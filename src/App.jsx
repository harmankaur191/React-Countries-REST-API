import CountriesPage from "../components/CountriesPage"
import Filter from "../components/Filter"
import { FilterContextProvider } from "../context/FilterContext.jsx"
export default function App(){
  return (
    <FilterContextProvider>
      <div className="flex flex-col p-4 gap-5">
        <Filter/>
        <CountriesPage/>
      </div>
    </FilterContextProvider>
  )
}