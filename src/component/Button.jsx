
const Button = ({ click, title}) => {

    // const classes = `bg-`;
    return (
    <button className="bg-gradient-to-r text-nowrap pr-4 pl-4 rounded-full text-lg h-10 flex items-center justify-center text-color-primary_font from-[#D05705] via-[#F58615] to-[#D05705] " onClick={click}>
        {title}
    </button>
  )
}

export default Button;