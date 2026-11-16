import { useContext } from "react"
import CountriesPage from "./components/CountriesPage.jsx"
import Filter from "./components/Filter.jsx"
import Homepage from "./components/Homepage.jsx"
import { FilterContextProvider } from "./context/FilterContext.jsx"
import { ThemeContext} from "./context/ThemeContext.jsx"
import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import CountryPage from "./components/CountryPage.jsx"
import './App.css';
import Searchbar from "./components/Searchbar.jsx"
import {SearchProvider} from './context/SearchContext.jsx'

export default function App() {
const {theme}=useContext(ThemeContext);

  return (
    <FilterContextProvider>
      <SearchProvider>
      <div className={`${theme} flex flex-col px-5 gap-5`}>
         <Homepage/>
          <Routes>
            <Route path='/' element={<><Searchbar/><Filter/> <CountriesPage/></> }/>
            <Route path='/country/:alpha2code' element={<CountryPage/>} />
          </Routes>
        </div>
      </SearchProvider>
        
    </FilterContextProvider>
  )
}