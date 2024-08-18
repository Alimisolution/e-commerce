import FilterProduct from "../../components/FilterProduct/FilterProduct";
import Loader from "../../components/Loader/Loader";
import ProductsList from "../../components/ProductsList/ProductsList";
import SortProducts from "../../components/SortProduct/SortProducts";
import { useStore } from "../../context/context"
import TypingEffect from '../../components/TypingEffect/TypingEffect'


function HomePage() {
const {isLoading, isError,sorteditems} = useStore();

// Calling Tpying Effect Function
const text = TypingEffect("Trending and Latest Products");
const text2 = TypingEffect("Newest Products");


  return (
    <>
      {isLoading ? <Loader/> : isError ? ( <p className="z-30 pt-20 w-[100%] h-screen text-3xl font-semibold">Error 🌋🍰🍰</p>) 
      
      :
      <>
        <p className="font-semibold lg:text-4xl sm:text-3xl text-2xl text-center sm:mb-20 mb-10">{text}</p>
      <div className="pb-10 lg:flex lg:space-y-0 space-y-8 justify-between items-center gap-5 mx-auto"> 
        <p className="text-center font-semibold text-2xl sm:text-3xl mb-7"> {text2}</p>
        <SortProducts/>
      </div>
      <div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 py-10">
        {sorteditems.map(product =>(
          <div key={product.id}>
          <ProductsList product={product}/>
        </div>
      ))}
      </div>
      </div>
      </>
    }
    </>
    
  )
}

export default HomePage