import { Link } from "react-router-dom"

import {FaTimes} from 'react-icons/fa'
import { useStore } from "../../context/context"
function SmallMenu() {

  const {changeMenuToFalse} = useStore()

  return (
  <div className="h-screen bg-slate-800 text-white z-20 w-[100%] absolute top-0 left-0">
    <nav className="flex flex-col py-20 px-5 text-lg tracking-widest gap-3">
        <Link  onClick={changeMenuToFalse} to="/">Home</Link>
        <Link  onClick={changeMenuToFalse} to="/category">Category</Link>
        <Link  onClick={changeMenuToFalse} to="/searchCategory">Search Category</Link>
    </nav>
    
    <div onClick={changeMenuToFalse} className="font-bold text-2xl absolute top-5 right-8">
      <FaTimes />
    </div>
  </div>
  )
} 

export default SmallMenu