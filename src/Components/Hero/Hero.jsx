
import women from '../../assets/Images/women.png'
import sale from '../../assets/Images/sale.png'
import shopping from '../../assets/Images/shopping.png'
import Slider from "react-slick"




const Hero=()=>{
    var Seettings={
        dots:false,
        arrows:false,
        infinite:true,
        speed:800,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:4000,
        cssEase:"ease-in-out",
        pauseOnHover:false,
        pauseOnFacus:true,

    }
    const ImageList=[
        {
            id:1,
            img:women,
            title:"Upto 50% off on all Womens Wear",
            desription:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,"
        },
        {
            id:2,
            img:sale,
            title:"Upto 50% off on all Womens Wear",
            desription:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,"
        },
        {
            id:3,
            img:shopping,
            title:"Upto 50% off on all Womens Wear",
            desription:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,"
        }
    ]
    return(
        <>
        <div className=" relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center
         items-center dark:bg-gray-950 dark:text-white">
     <div className='h-[700px] w-[700px] bg-primary/40 mt-0 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9 dark:bg-yellow-700 '>

     </div>
     <div className='container pb-8 sm:pb-0'>
        <Slider {...Seettings}>
            {
                ImageList.map((item)=>(
                    <div>
                    <div className='grid grid-cols-1 sm:grid-cols-2'> 
                        <div className='d-flex align-items-center relative z-10 sm:text-left order-2 sm:order-1 '>
                        <div className=''>
                <h1 className='text-5xl sm:text-6xl lg:text-7xl mb-1'>{item.title}</h1>
                <p className='text-sm mt-6'>{item.desription}</p>
                <button className=' bg-gradient-to-r from-primary  to-secondary py-1 px-4 text-white rounded-full'>Order Now</button>
            </div>
                        </div>
            
            
            <div className='order-1 sm:order-2'>
                <div className='relative z-10'>
                <img className='w-[290px] h-[290px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto' src={item.img} alt="" />
                </div>
            </div>
              
                    </div>
                </div>
                ))
            }
   
        </Slider>
    
  
     </div>
        </div>
     
        </>
    )
}
export default Hero;