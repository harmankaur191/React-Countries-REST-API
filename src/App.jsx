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

export default function App() {
const {theme}=useContext(ThemeContext);
console.log(theme);
  return (
    <FilterContextProvider>
        <div className={`${theme} flex flex-col p-4 gap-5`}>
          <Homepage />
          <Filter />
          <CountriesPage />
          <Routes>
            <Route path='/country/:alpha2code' element={<CountryPage/>} />
          </Routes>
        </div>
    </FilterContextProvider>
  )
}