import xmm_img from "../assets/Images/xmm-img1.png"
import xmm_tick from "../assets/Images/xmm-tick.png"
import Button from "./Button"

const Tokens = () => {
  return (
    <div className="container p-10">
        <div className="flex max-sm:flex-col-reverse items-center justify-center ">

            <div className="w-1/2 max-sm:w-full flex justify-end">
                    <img src={xmm_img} alt=""  className=" w-full" />
            </div>
            <div className="w-1/2 max-sm:w-full flex flex-col max-sm:pt-5 ">
                <div className=" w-[450px] max-sm:w-full">
                    <h3 className="title max-sm:text-2xl max-sm:text-center ">best ever token designed for remarkable success</h3>
                    <p className="paragraph pt-5">The main advantage of supporting $XMM is the project is focused 
                        on creating Volume and Market making through. XMM Empowers 
                        businesses to creative dynamic content target specific
                    </p>
                    <div className="flex pt-8 gap-10 max-sm:gap-3  text-color-primary_font">
                        <p className="flex items-center gap-3 max-sm:gap-1"> <span><img src={xmm_tick} alt="tick" /></span> Market</p>
                        <p className="flex items-center gap-3 max-sm:gap-1"> <span><img src={xmm_tick} alt="tick" /></span> Volume</p>
                        <p className="flex items-center gap-3 max-sm:gap-1"> <span><img src={xmm_tick} alt="tick" /></span> Trend</p>
                    </div>
                    <div className="pt-8 max-sm:flex max-sm:items-center max-sm:justify-center">

                        <Button title="Read Whitepaper"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tokens