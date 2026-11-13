import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export default function ThemeButton(){
    const {theme, setTheme} = useContext(ThemeContext);
   
    const handleClick = ()=>{
     
        setTheme(theme==='light'?'dark':'light');
    }
    return(
       <button type='submit' onClick={handleClick}>
        {theme==='light'?'Dark Mode':'Light Mode'}
       </button>
    )
}