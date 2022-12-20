import { Uzuulelt2 } from "./Uzuulelt2"
import { Uzuulelt3 } from "./Uzuulelt3"
import { Uzuulelt4 } from "./Uzuulelt4"



export const Nek3=({Uzuuleltchange, Uzuulelt2change, Uzuulelt3change, Uzuulelt4change,})=>{
    return(
<div className="baraa">
        <div onClick={Uzuuleltchange} className="baraa1" >
            <div className="medeelel"><h1> Үзүүлэлт </h1> </div>
            
        </div>
        <div onClick={Uzuulelt2change} className="baraa2">
            <div className="medeelel"><h1> Үзүүлэлт </h1></div>
            </div>
        <div onClick={Uzuulelt3change} className="baraa3"> 
            <div className="medeelel"><h1> Үзүүлэлт </h1></div>
        </div>
        <div onClick={Uzuulelt4change} className="baraa4">
            <div className="medeelel"> <h1> Үзүүлэлт </h1></div>
        </div>
    </div>
    )

}