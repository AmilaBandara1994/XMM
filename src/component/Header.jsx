import XMMLogo from '../assets/Images/xmm-logo.png'
import burger from '../assets/icon/burger-menu.svg'
import Button from './Button'


const Header = () => {
  return (
    <div className='w-full p-2 border-b border-color-border_blue container'>
    <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 max-lg:py-4 ">
        <div className="w-[12rem] max-sm:w-1/2">
            <a className=" xl:mr-8" href="#hero">
                <img src={XMMLogo} width={100} height={40} alt="Brainwave" />
            </a>
        </div>
      <nav className=" max-sm:hidden" >
        <ul className=' flex gap-5 text-color-secondary_font text-lg'>
            <li>Home</li>
            <li>About Us</li>
            <li>Tokenomics</li>
            <li>Roadmap</li>
            <li>FAQ</li>
        </ul>
      </nav>

      <div className="w-[12rem] max-sm:w-1/2 flex max-sm:gap-2 justify-end max-sm:justify-end">
        <Button title="Buy Tokens" />
        <button className='hidden max-sm:inline'>
            <img src={burger} alt="" className='w-10 h-10' />
        </button>
      </div>

    </div>
  </div>
  )
}

export default Header