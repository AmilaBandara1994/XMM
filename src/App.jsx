import './App.css'
import Feature from './component/Feature'
import Header from './component/Header'
import Hero from './component/Hero'
import Tokens from './component/Tokens'
import arrow from "./assets/Images/arrow.png"

function App() {

  return (
    <>
      <div className="flex flex-col pb-10">
        <div className="flex flex-col items-center justify-center  bg-color-primary">
          <Header />
          <Hero />
        </div>
        <div className="relative flex items-center  justify-center">

          <button  className='absolute rounded-full  w-[7rem] h-[7rem] flex items-center justify-center p-3 border-[1.4rem] border-color-secondary text-color-white  bg-color-primary'>
            <img src={arrow} className="w-6" alt="arrow down"  />
          </button>
        </div>
        <div className="">
          <Tokens />
          <Feature />
        </div>
      </div>
   
    </>
  )
}

export default App
