import React from "react";
import Navbar from "./Components/NavBarr/Navbar";
import Hero from "./Components/Hero/Hero";
import Products from "./Components/Products/Products";
import Aos from "aos"
import  "aos/dist/aos.css"
import BestProducts from "./Components/BestProducts/BestProducts";
import Sale from "./Components/Sale/Sale";
import Notifed from "./Components/Notifed/Notifed";
import Testimonials from "./Components/Testimonials/Testimonials";
import Fotter from "./Components/Fotter/Fotter";

const App=()=>{
  React.useEffect(()=>{

    Aos.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100
    })
    Aos.refresh()
  },[])
  return(
    <>
    <div  className="dark:bg-gray-800">
    <Navbar/>
   <Hero/>
   <Products/>
   <BestProducts/>
   <Sale/>
   <Notifed/>
   <Products/>
   <Testimonials/>
   <Fotter/>
    </div>
 
  
    </>
  )
}
export default App;