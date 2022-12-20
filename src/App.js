import { useState } from "react";
import { Nek5 } from "./Nek5";
import { Nek3 } from "./Nek3"
import { Nek4 } from "./Nek4";
import { Nekk } from "./Nekk";
import { Nekkk } from "./Nekkk";
import { Uzuulelt } from "./uzuulelt";
import { Uzuulelt2 } from "./Uzuulelt2";
import { Uzuulelt3 } from "./Uzuulelt3";
import { Uzuulelt4 } from "./Uzuulelt4";


export const App = () =>  {

  const [open, setOpen] = useState(false)

  const Uzuuleltchange =()=> {
    setOpen(!open)
    console.log(open)
  }
   

  // const [back, setBack] = useState(false)

  const backchange =()=> {
    setOpen(false)
    
  }

  const [unen, setUnen] = useState(false)

  const Uzuulelt2change =()=> {
    setUnen(!unen)
  
  }
  

  // const [hudal, setHudal] = useState(false)

  const hudalchange = ()=> {
    setUnen(false)
  
  }

  const [neg, setNeg] = useState(false)
  const Uzuulelt3change =()=> {
    setNeg(!neg)
  }

  const [hoyr, setHoyr] = useState(false)
  const hoyrchange =()=> {
    setNeg(false)
  }

  const [dewter, setDewter] =useState(false)
  const Uzuulelt4change =()=>{
    setDewter(!dewter)
  }

  const [nom, setNom] = useState(false)
  const nomchange =()=>{
    setDewter(false)
  }

 
 

 


  return (
    <div>
    <Nekk></Nekk>
    <Nekkk></Nekkk>
    <Nek3 Uzuuleltchange={Uzuuleltchange} Uzuulelt2change={Uzuulelt2change} Uzuulelt3change={Uzuulelt3change} Uzuulelt4change={Uzuulelt4change}></Nek3>
    <Nek4></Nek4>
     <Nek5></Nek5>
     <Uzuulelt open={open} backchange={backchange}></Uzuulelt>
     <Uzuulelt2 unen={unen} hudalchange={hudalchange}></Uzuulelt2>
     <Uzuulelt3 neg={neg} hoyrchange={hoyrchange}></Uzuulelt3>
     <Uzuulelt4 dewter={dewter} nomchange={nomchange}></Uzuulelt4>
   </div>
  );
}


