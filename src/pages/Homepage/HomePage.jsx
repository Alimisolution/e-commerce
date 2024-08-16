import Loader from "../../components/Loader/Loader";
import ProductsList from "../../components/ProductsList/ProductsList";
import { useStore } from "../../context/context"

function HomePage() {
const {store, isLoading, isError, search,setSearch} = useStore();
console.log(store)
  return (
    <>
      {isLoading && <Loader/>}
      {isError && <p>Error</p>}
      <>
      <div className="pb-10"> 
        <p className="font-semibold text-4xl">Lastest Products</p>
        <input type="text" value={search} onchange={(e) => setSearch(e.target.value)} placeholder="Search Products" />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 py-10">
        {store.map(product =>(
          <div key={product.id} c>
          <ProductsList product={product}/>
        </div>
      ))}
      </div>
      </>
    </>
    
  )
}

export default HomePage