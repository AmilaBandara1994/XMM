import xmm_hero from "../assets/Images/xmm-hero.png"
import user1 from "../assets/Images/user1.jpg"
import user2 from "../assets/Images/user2.jpg"
import user3 from "../assets/Images/user3.jpg"
import Button from "./Button"

const Hero = () => {
  return (
    <div className="container flex flex-col max-sm:items-center max-sm:justify-center">
        <h1 className="text-[92px] max-lg:text-[72px]  max-sm:text-[40px] max-sm:text-center text-color-primary_font uppercase font-black">marketing making <br />with xmm.</h1>
        <div className="flex max-sm:flex-col max-sm:items-center max-sm:justify-center ">
            <div className="right w-1/2 max-sm:w-full  min-h-[300px]">
                <div className="w-[500px] max-sm:w-full ">
                <p className="text-color-secondary_font max-sm:items-center max-sm:text-center font-kanit">XMM empowers businesses to create dynamic content, target 
                    specific demographics, and optimize their digital presence.
                </p>
                    <div className=" flex items-center max-sm:items-center max-sm:justify-center max-sm:flex-col gap-7 mt-5">
                        <Button  title="Join Telegram"/>
                        <div className="relative max-sm:flex ">
                            <img src={user1} alt="" className="rounded-full w-12 h-12" />
                            <img src={user2} alt="" className="absolute left-9 top-0 rounded-full w-12 h-12" />
                            <img src={user3} alt="" className="absolute left-[4.7rem]  top-0 rounded-full w-12 h-12" />

                        </div>
                    </div>
                </div>
                <h2 className="uppercase mt-7 text-xl max-sm:text-center font-semibold w-[300px] text-color-secondary_font">our happy customers</h2>
                <h3  className="normal-case w-[300px] max-sm:text-center text-base pt-1 text-color-secondary_font">Our happy customers are at the heart of everything we do</h3>
            </div>
            <div className="w-1/2 max-sm:w-full relative max-sm:pb-20 pt-5">
                <img src={xmm_hero} alt=""  className=" h-[450px] absolute max-sm:relative bottom-1" />
            </div>
        </div>

        
    </div>
  )
}

export default Hero