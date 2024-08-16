



import { useStore } from "../../context/context"
import BigMenu from "../BigMenu/BigMenu"
import SmallMenu from "../SmallMenu/SmallMenu";

function NavBar() {
  const {showMenu} = useStore();

  
  return (
    <div>
    {showMenu ? <SmallMenu/> : <BigMenu/>}
    </div>
  )
}

export default NavBar