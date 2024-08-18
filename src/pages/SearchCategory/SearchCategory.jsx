import { useEffect, useState } from "react"
import { useStore } from "../../context/context";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function SearchCategory() {
    const [search, setSearch] = useState("")
    const [product, setProduct] = useState([])
    const {isLoading, setIsLoading, isError,setIsError} = useStore()

    async function SearchCategoryFunc(){
        //Do nothing if the Search input is empty
        if (!search) return; 
        
         //set the loading state to true
        setIsLoading(true);
        try {
            const res = await fetch(`https://fakestoreapi.com/products/category/${search}`);
            
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
             //Storing all the searched products category inside product
            const data = await res.json();
            setProduct(data);
        } catch (error) {
            setIsError(error)
            // Optionally, setProduct([]) or show an error message to the user
        } finally {
            //set the loading state to false
            setIsLoading(false);
        }
    }
    
    function onSubmitSearch(e){
        e.preventDefault()
        SearchCategoryFunc();
    }

    useEffect(() => {
        // Optionally, you might want to fetch data when search changes
    }, [search]); 
console.log(product)

  return (
    <div>
        <p className="text-center sm:text-3xl text-xl font-semibold mb-10"  data-aos="fade-left"
            data-aos-duration="500">Search for Product by Category using (electronics, jewelery, men's clothing, women's clothing)</p>
        <form onSubmit={onSubmitSearch} className="flex justify-center items-center gap-2">
            <input type="text" className="py-2 pl-5 border border-black sm:w-[400px] w-[100%] outline-none" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search Products" />
            <button className="bg-blue-600 py-2 px-4 text-white" type="submit">Search</button>
        </form>
        {isLoading ? <Loader/> : isError ? ( <p className="z-30 pt-20 w-[100%] h-screen text-3xl font-semibold">Error 🌋🍰🍰</p>) : (

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 py-10">
        {product.map(pro =>(
            <Link to={`/details/${pro.id}`} key={pro.id}>
                <div className='shadow-lg px-10 pb-3' data-aos="fade-right"
            data-aos-duration="500">
                    <img src={pro.image} alt={pro.title} className='sm:w-[350px] sm:h-[270px]' />
                    <div className='pt-3'>
                    <p className='font-semibold text-s'>{pro.title.slice(0,20)}...</p>
                    <div className='flex justify-between items-center py-2'>
                        <p>{pro.category}</p>
                        <p className='font-semibold text-lg'>${pro.price}</p>
                    </div>
                    <div className='mt-2'>
                        <span className='text-sm'>{pro.description.slice(0,40)}</span>
                        <span className='text-blue-800 font-semibold text-sm ml-1 tracking-widest '>Full Details</span>
                    </div>
                    </div>
                </div>
            </Link>
        ))}
        </div>
    )}
    </div>
  )
}

export default SearchCategory