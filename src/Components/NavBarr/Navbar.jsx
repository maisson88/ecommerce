import React from "react";
import Logo from '../../assets/Images/Logo.png'
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
const Navbar=()=>{
    return(
        <>
       <div class="shadow-md  dark:bg-gray-800 dark:text-yellow-50 duration-200 relative z-40 mb-0 ">
  <div class="bg-primary/40 py-1 dark:bg-yellow-700">
    <div class="container d-flex justify-content-between align-items-center">
      <div>
        <p class="font-bold text-2xl sm:text-3xl flex gap-2">
          <img src={Logo} alt="" class="w-10 uppercase" />
          Shopsy
        </p>
      </div>
      <div className="d-flex justify-content-between align-items-center gap-4">
      <div>
      <div class="group relative hidden sm:block" >
      <input type="text" placeholder="Search" class="w-[200px] sm:w-[200px] group-hover::w-[300px]
        rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:bg-gray-800 dark:border-gray-500
         dark:text-white      transition ease-in-out delay-150  hover:-translate-x-1 hover:scale-110  duration-300"  />      </div>
         {/* <IoMdSearch
         className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-2"
         /> */}
      </div>
   
      <button onClick={()=>alert("orderning not avilaple yet")} className=" bg-gradient-to-r from-primary  to-secondary transition-all duration-200 py-1 px-4 text-white rounded-full d-flex align-items-center gap-3 group">
        <span className="group-hover:block hidden">Order</span>
        <FaCartShopping /> 
      </button>
      <div>
        <DarkMode/>
      </div>
      </div>
  
    </div>
  </div>
  <div className="hidden sm:hidden md:hidden lg:block">
    <ul className= "sm-flex hidden d-flex gap-5 justify-content-center align-items-center py-2 group">
    
          <li className="hover:text-primary duration-200 cursor-pointer inline-block">
            <a>Home</a>
            </li>
     
          <li className="hover:text-primary duration-200 cursor-pointer">
            <a>Top Rated</a>
            </li>
     
          <li className="hover:text-primary duration-200 cursor-pointer">
            <a>Kids Wear</a>
            </li>
     
          <li className="hover:text-primary duration-200 cursor-pointer">
            <a>Electronics</a>
            </li>
     
          <li className=" duration-200 cursor-pointer group relative">
            <span className="d-flex align-items-center gap-1 ">Trending Products  
              <span>
                <FaCaretDown
                className="transition-all duration-200 group-hover:rotate-180"
                />
              </span>
            </span>
            <div className="absolute z-[99999]  hidden px-1 py-2 group-hover:block bg-white  w-[150px] rounded-md shadow-md">
              <ul className="text-black ps-0">
                <li>
                  <span className="hover:bg-red-200 w-full inline-block p-1 rounded-full">Trending Products</span>
                </li>
                <li>
                  <span className="hover:bg-red-200 w-full inline-block p-1 rounded-full">Best Selling</span>
                </li>
                <li>
                  <span className="hover:bg-red-200 w-full inline-block p-1 rounded-full">Top Reated</span>
                </li>


              </ul>
            </div>
            </li>
     
    </ul>
  </div>
</div>
       
        </>
    )
}
export default Navbar;