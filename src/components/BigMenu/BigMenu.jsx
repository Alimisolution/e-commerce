import { Link } from "react-router-dom"
import {FaBars} from 'react-icons/fa'
import { useStore } from "../../context/context"


function BigMenu() {
  const {changeMenu} = useStore()
  

return (
   <div className="sm:px-28 px-5 py-7 flex justify-between items-center bg-white shadow-md ">
    <div className="text-3xl font-semibold text-slate-800 flex justify-center items-center">
      <img className="w-[40px]" src="/icon.png" alt="site-logo" />
      <p>-Store</p>
    </div>

    <nav className="space-x-8 md:flex hidden text-slate-800 font-semibold tracking-widest text-lg">
        <Link to="/">Home</Link>
        <Link to="/category">Category</Link>
        <Link to="/searchCategory">Search Category</Link>

    </nav>
    <div className="font-bold text-xl md:hidden cursor-pointer" onClick={changeMenu}>
        <FaBars/>
    </div>
  </div>
  )
}

export default BigMenu
