import { Link } from "react-router-dom"
import {FaBars} from 'react-icons/fa'
import { useStore } from "../../context/context"


function BigMenu() {
  const {changeMenu, dark,TogglingDarkMode} = useStore()

  

return (
   <div className="sm:px-28 px-5 py-7 flex justify-between items-center bg-white shadow-md ">
    <Link to="/" className="text-3xl font-semibold text-slate-800 flex justify-center items-center">
      <img className="w-[40px]" src="/icon.png" alt="site-logo" />
      <p>-Store</p>
    </Link>
  <button className="bg-black font-semibold text-white sm:text-lg text-sm rounded-md py-1 px-3" onClick={TogglingDarkMode}>{dark ? "Light" : "Dark"}</button>
    <nav className="space-x-8 md:flex hidden text-slate-800 font-semibold tracking-widest text-lg">
        <Link to="/">Home</Link>
        <Link to="/category">Category</Link>
        <Link to="/searchCategory">Search Category</Link>

    </nav>
    <div className={dark ? "font-bold text-xl md:hidden cursor-pointer text-black" : "font-bold text-xl md:hidden cursor-point text-black"} onClick={changeMenu}>
        <FaBars/>
    </div>
  </div>
  )
}

export default BigMenu
