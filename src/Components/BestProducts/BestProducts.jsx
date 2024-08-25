import shirt from"../../assets/Images/shirt.png"
import shirt2 from"../../assets/Images/shirt2.png"
import shirt3 from"../../assets/Images/shirt3.png"

const BestProducts=()=>{
    const Products=[
        {
            id:1,
            Img:shirt,
            hhh:"Casual Wear",
            ppp:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"

        },
        {
            id:2,
            Img:shirt2,
            hhh:"Casual Wear",
            ppp:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"

        },
        {
            id:3,
            Img:shirt3,
            hhh:"Casual Wear",
            ppp:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"

        },
    ]
    return(
        <>
        <div className="container">
            <div  >
                <div className="mb-24" >
                     <p  data-aos="fade-up" className="text-orange-400 text-sm mb-0 ">Top Selling Products for you</p>
            <h1  data-aos="fade-up" className="text-xl font-bold dark:text-white">Best Products</h1>
            <p  data-aos="fade-up" className="text-xs text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
                </div>

                <div className="row mb-1 d-flex justify-content-between" >
                  
                        {
                            Products.map((item)=>(
                                <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center ">
                                <div data-aos="zoom-in" className="rounded-2xl shadow-xl relative group max-w-[300px] duration-300 hover:bg-gray-800 dark:bg-gray-700 hover:text-white dark:hover:bg-orange-300 text-center d-flex justify-content-center px-3 pb-3 pt-2 mb-5 mt-5">
                                <div className="text-center">
                                    <div  className="mb-0">
                                        <img className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-400 drop-shadow-md" src={item.Img} alt="" />
                                        
                                    </div>
                                <div className="d-flex gap-2 justify-content-center">
                                <svg style={{color:'orange'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
    <svg style={{color:'orange'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
    <svg style={{color:'orange'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
    <svg style={{color:'orange'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
                                </div>
                                <h3 className="dark:text-white">Casual Wear</h3>
                                <p className="dark:text-white text-sm  text-gray-400">lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                <button className=' bg-gradient-to-r from-primary  to-secondary py-1 px-4 text-white rounded-full'>Order Now</button>
                                </div>
                               
                            </div>
                            
                    </div>
                            ))
                        }
                 
                </div>
            </div>
        </div>
        </>
    )
}
export default BestProducts;