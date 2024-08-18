import { useParams } from "react-router-dom"
import { useStore } from "../../context/context";
import Loader from "../../components/Loader/Loader";
import { useEffect, useState } from "react";
import TypingEffect from "../../components/TypingEffect/TypingEffect";

function DetailsPage() {
  const {id}  = useParams();
const [singleProduct, setSingleProduct ] = useState({})


// Calling Tpying Effect Function
const text = TypingEffect("Details Overview");

const {isLoading, setIsLoading} = useStore();

  //fetch  single product 
async function fetchSingleProducts(id){
    //set the loading state to true
    setIsLoading(true)

    try {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

  const data = await res.json()
  //Storing all the products inside Store
  setSingleProduct(data)
  //set tge loading state to true
  setIsLoading(false)
     } catch (error) {
      console.log(error)
    } finally {
    //set the loading state to false
    setIsLoading(false);
        }
  
}

  //call the fetchSingleProducts Fucntion inside useEffect
useEffect(() =>{
  fetchSingleProducts(id);
}, [])


  return (
 <>
      {isLoading ? <Loader/> : (   
        <div className="space-y-20 sm:text-center">
            <h1 className="font-semibold sm:text-3xl text-2xl text-center">{text}</h1>
            <div className="flex flex-col items-center justify-center shadow-2xl py-10 px-3">
            <img src={singleProduct.image} className="sm:w-[300px] block" alt={singleProduct.title} />
            <div className="pt-4">
            <p className="mb-3 font-semibold sm:text-2xl text-lg text-center">{singleProduct.title}</p>
            <p className="text-sm sm:text-lg">{singleProduct.description}</p>
            <div className="mt-3">
            <p className="text-lg">{singleProduct.category}</p>
            <p className="font-semibold text-lg">${singleProduct.price}</p>
            </div>
            </div>
            </div>
        </div>
        )}
      </>
  )
}

export default DetailsPage