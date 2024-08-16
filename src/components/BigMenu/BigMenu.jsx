import { Link } from "react-router-dom"
import {FaBars} from 'react-icons/fa'
import { useStore } from "../../context/context"


function BigMenu() {
  const {changeMenu} = useStore()

return (
   <div className="sm:px-20 px-5 py-7 flex justify-between items-center bg-white shadow-md sticky top-0 left-0 z-10">
    <div className="text-3xl font-semibold text-slate-800">Store</div>

    <nav className="space-x-8 md:flex hidden text-slate-800 font-semibold tracking-widest text-lg">
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>

    </nav>
    <div className="font-bold text-xl md:hidden cursor-pointer" onClick={changeMenu}>
        <FaBars/>
    </div>
  </div>
  )
}

export default BigMenu
