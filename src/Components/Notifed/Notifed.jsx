
import orange from "../../assets/Images/orange.jpg"
const Notifed=()=>{
    const BannerImage={
        backgroundImage:`url(${orange})`,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        hight:"100%",
        width:"100%"

    }
    return(
        <>
        <div data-aos="fade-up"
            data-aos-delay={8} style={BannerImage} className="d-flex justify-content-center py-4 h-52 mb-13">
            <div className="container text-center">
            <h1 className="font-bold text-white">Get Notified About New Products</h1>
            <input data-aos="fade-up"
            data-aos-delay={8} type="email" placeholder="Enter Your Email" className="w-50 mt-4 h-11 px-2" />
            </div>

        </div>
        </>
    )

}
export default Notifed