import { useState } from "react"

export const  Uzuulelt=({open, backchange})=>{



    return(
        <div onClick={backchange} style={open ? css.menu2 : css.menu2hide}>
        <div className="menu3">
        </div>
        <div className="uzuulelt">
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
    menu2: {
        display: 'flex',
        width: '70%' ,
        height: '700px',
        backgroundColor: 'rgb(255, 255, 255,0.5)',
        marginTop: '20px',
        marginLeft: '15%',
        justifyContent: 'center',
        position: 'absolute',
        top: '250px',
        zIndex: '1',
        alignItems: 'center',
        borderRadius: '15px',
       
      },

      menu2hide: {
        display: 'none'
      }
}

//1. Бараан дээр дарангуут барааны дэлгэрэнгүй мэдээлэл гарах цонх хийнэ
//2. 2төрлийн style бичих - 1. анхны style 2. display none style

//3. state хэрэгтэй, click хийх үед state өөрчилдөг функц хэрэгтэй