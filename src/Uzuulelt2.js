import { useState } from "react"
import zurag from "./R__1_-removebg-preview.png"
export const Uzuulelt2=({unen, hudalchange})=>{
    
    return(
        <div onClick={hudalchange} style={ unen ? css.hu : css.huhide}  >
        <div>
            <img src={zurag}style={{display:'flex',width:'400px', height:'400px', margin:'60px',}} />
        </div>
        <div style={{ display:'flex',   flexDirection: 'column',}} >
            <h1>• I7 13700th Gen</h1> 
            <h1>• 9,540,000₮</h1>
            <h1>• BOARD – ASUS H510 M K</h1>
            <h1>• HARD –Pioneer 512gb m2</h1>
            <h1>• RAM – 128GB DDR4 4500Mhz</h1>
            <h1>• GPU – RTX4090-24GB</h1>
            <h1>• CASE – Tank 3</h1>
            <h1>• BLOK – Cooler master 1000w</h1>
            <h1>• COOLER – T400i</h1>
        </div>
        </div>
    )
}
const css = {
hu:{
    display: 'flex',
        width: '70%' ,
        height: '700px',
        backgroundColor: 'rgb(255, 255, 255,0.8)',
        marginTop: '20px',
        marginLeft: '15%',
        justifyContent: 'center',
        position: 'absolute',
        top: '250px',
        zIndex: '1',
        alignItems: 'center',
        borderRadius: '15px',
 },
     huhide: {
      display: 'none',
      }
}
