
import { useEffect, useState } from 'react'
import light from '../../assets/Images/light.png'
import night from '../../assets/Images/night.png'
const DarkMode=()=>{
    const [theme,setTheme]=useState(
        localStorage.getItem('theme')?localStorage.getItem("theme"):'light'
    )
    const element =document.documentElement
    useEffect(()=>{
        if(theme==="dark"){
            element.classList.add("dark")
            localStorage.setItem('theme',"dark")
        }else{
            element.classList.remove("dark")
            localStorage.setItem("theme","light")
        }
    },[theme])
    return(
        <>
        <div className='relative'>
        <img onClick={()=>setTheme(theme==="light"?"dark":"light")} src={light} className={`w-10 transition-all duration-300 absolute right-0 z-10 ${theme==="dark"?"opacity-0":"opacity-100"}`} alt="" />
        <img onClick={()=>setTheme(theme==="light"?"dark":"light")}  src={night} className='w-10 transition-all duration-300 ' alt="" />
        </div>
  

        </>
    )
}
export default DarkMode