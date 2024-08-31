import icon1 from "../assets/Images/xmm-icon1.png"
import icon2 from "../assets/Images/xmm-icon2.png"
import icon3 from "../assets/Images/xmm-icon3.png"



const Feature = () => {
  return (
    <div className="container">
            <span className="text-color-primary_font uppercase border  border-color-secondary_font rounded-xl pl-2 pr-2 ">features</span>
    <div className="flex flex-row max-sm:flex-col max-sm:gap-4 pt-2">
        <div className="basis-1/3 flex flex-col justify-between">
            <h2 className="title text-[40px]">feature of x <span className="uppercase">market marker</span> </h2>


            <p className="paragraph w-[80%]">X Market Maker offers a comprehensive set of feature tailored for market participants 
                its core functionalities include real-time pricing, liquidity.
            </p>
        </div>
        {/* <div className="flex"> */}
            <div className="basis-1/5  min-h-[300px] p-2 border-l border-color-border bg-gradient-to-t from-[#3d2c9a34]">
                <span className="text-color-primary_font">01</span>
                <h3 className="cardheader">benefits for holders</h3>
                <img src={icon1} alt="" className="pt-20" />
                <p className="paragraph">
                    We aim to increase the value of
                    our currency to benefit our community.
                    Market making will be key focus. We aim
                    to increase the value of our currency to benefit 
                    our community
                </p>
            </div>
            <div className="basis-1/5 min-h-[300px] p-2 border-l border-color-border bg-gradient-to-b from-[#3d2c9a34]">
                <span className="text-color-primary_font">01</span>
                <h3 className="cardheader">benefits for holders</h3>
                <img src={icon2} alt="" className="pt-20" />
                <p className="paragraph">
                   XMM is the First ever Crypto with 
                   the market making objective that is being worked upon at such amazing level! We 
                   will focus on community building a lot for that.
                </p>
            </div>
            <div className="basis-1/5  min-h-[300px] p-2 border-l border-color-border bg-gradient-to-t from-[#3d2c9a34]">
                <span className="text-color-primary_font">01</span>
                <h3 className="cardheader">benefits for holders</h3>
                <img src={icon3} alt="" className="pt-20"/>
                <p className="paragraph">
                    Our Powerful token will protect our holders 
                    from the turbulence of the crypto market and help them 
                    hold despite the uncertainty of the market..
                </p>
            </div>
        {/* </div> */}

    </div>
    </div>

  )
}

export default Feature