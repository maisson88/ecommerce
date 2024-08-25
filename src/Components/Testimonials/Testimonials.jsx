import one from "../../assets/Images/1.jpg"
import two from "../../assets/Images/2.jpg"
import three from "../../assets/Images/3.jpg"
import four from "../../assets/Images/4.jpg"
import five from "../../assets/Images/5.jpg"
import sex from "../../assets/Images/6.jpg"
import Slider from "react-slick"



const Testimonials=()=>{
    const Products=[
        // {
        //     id:1,
        //     Img:one,
        //     hhh:"Casual Wear",
        //     ppp:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"

        // },
        // {
        //     id:2,
        //     Img:two,
        //     hhh:"Casual Wear",
        //     ppp:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"

        // },
        // {
        //     id:3,
        //     Img:three,
        //     hhh:"Casual Wear",
        //     ppp:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"

        // },
        {
            id:4,
            Img:four,
            hhh:"Casual Wear",
            ppp:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"

        },
        {
            id:5,
            Img:five,
            hhh:"Casual Wear",
            ppp:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"

        },
        {
            id:6,
            Img:sex,
            hhh:"Casual Wear",
            ppp:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"

        },
    
    ]
    var Settings={
        dots:true,
        arrows:false,
        infinite:true,
        speed:500,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:2000,
        cssEase:"linear",
        pauseOnHover:true,
        pauseOnFacus:true,
        responsive:[
          {  breakpoint:10000,
            settings:
            {
                slidesToShow:3,
            slidesToScroll:1,
            infinite:true
        }
          },
          {
            breakpoint:1024,
            settings:
            {
                slidesToShow:2,
            slidesToScroll:1,
            initialSlide:2
        }

          },
          {
            breakpoint:640,
            settings:
            {
                slidesToShow:1,
            slidesToScroll:1,
      
        }

          }
        ]

    }
    return(
        <>
        <div className="container d-flex justify-content-center">
            <div
            data-aos="fade-up"
            data-aos-delay={8}
            className="mb-10 d-flex justify-content-center"
            >
                <div className=" ">
                <div className="text-center">
                <p  data-aos="fade-up" className="text-orange-400 text-sm mb-0 ">Top Selling Products for you</p>
            <h1  data-aos="fade-up" className="text-xl font-bold dark:text-white">Products</h1>
            <p  data-aos="fade-up" className="text-xs text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
                </div>
                <div>
                    <div className="row mt-5" 
                    >
                        {/* <Slider {...Settings}> */}
                        {
                            Products.map((item)=>(
                                <div className="col-lg-4 mb-3 relative col-md-6 col-sm-12">
                                <div className=" rounded-xl  py-3 pl-5 shadow-md dark:bg-gray-700" style={{backgroundColor:'#FFF6E9'}}>
                                    <img className="rounded-full w-[80px] h-[80px]" src={item.Img} alt="" />
                                    
                                    <div className="mt-4">  
                                           <p className="text-sm  text-gray-500">{item.ppp}</p>
                                    <h2>{item.hhh}</h2></div>
                                    <span className="absolute top-14 right-6 ">
                                    <svg className=" rotate-180 " style={{color:"#CCC5BA"}} xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
      <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
    </svg>
                                    </span>
                                {/* <p className="absolute top-0 right-0 text-9xl text-black/20">,,</p> */}
                               
                                </div>
                            </div>
                            ))
                        }

                        {/* </Slider> */}
                     
                       
                
                           
                       
                      
                 
                      
                       
                    </div>
                </div>
                </div>
              
           
               
            </div>
        </div>
        </>
    )
}
export default Testimonials