import { useStore } from "../../context/context";
import FilterProduct from "../../components/FilterProduct/FilterProduct";
import DisplayFilterCategory from "../../components/DisplayFilterCategory/DisplayFilterCategory";
import TypingEffect from "../../components/TypingEffect/TypingEffect";
import Loader from "../../components/Loader/Loader";

function ProductCategory() {
  const { isLoading,filteredProducts} = useStore();

  // Calling Tpying Effect Function
const text = TypingEffect("Products Filtering by Category");

  return (
    <>
    {isLoading ? <Loader/> : (
      <>
      <p className="text-center font-semibold sm:text-4xl text-2xl">{text}</p>
    <div className="flex flex-col items-center mt-14">
      <FilterProduct/>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 py-10 sm:mt-20 mt-10">
        {filteredProducts.map(products =>(
          <DisplayFilterCategory key={products.id} products={products}/>
          ))}
      <div>

      </div>
    </div>
          </div>
          </>
          )}
    </>
  )
}

export default ProductCategory