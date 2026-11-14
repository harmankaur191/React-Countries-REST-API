import { useParams } from "react-router-dom"

export default function CountryPage(){
    const {alphacode} = useParams();
    console.log(alphacode);
    return(
        <div>
            <section></section>
        </div>
    )
}