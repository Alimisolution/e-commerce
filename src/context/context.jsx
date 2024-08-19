import { createContext, useContext, useState, useEffect } from "react"
 const storeConext = createContext(null);

export default function StoreProvider({children}){

    // Initailazing All Satets
    const [isLoading, setIsLoading] = useState(false);
    const [store, setStore] = useState([])
    const [isError, setIsError] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const [sortBy, setSortBy] = useState("fetch")
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [dark, setDark] = useState(false)
     let sorteditems;


     // FakeApi All Products endpoint
    const products = "https://fakestoreapi.com/products";    


    //Set ShowMenu to True
    function changeMenu(){
        setShowMenu(true)
    }

    
    //Set ShowMenu to false
     function changeMenuToFalse(){
        setShowMenu(false)
    }


    //Toggling the dark class mode
    function TogglingDarkMode(){
        document.body.classList.toggle('dark')
        setDark(dark => !dark)
    }

    //Fucntion fro fetching All Products
async function fetchProducts(){
    //set the loading state to true
    setIsLoading(true)
try {

  const res = await fetch(products)
    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }

  const data = await res.json()
  //Storing all the products inside Store
  setStore(data)

} catch (error) {
    console.log(error)
} finally {
    //set the loading state to false
    setIsLoading(false);
        }
  
}





//call the fetchProducts Fucntion inside useEffect
useEffect(() =>{
    fetchProducts()
}, [])



//Filtering the products by category
   const categories = store.map(pro => pro.category)
    const filterCategory = ["All", ...new Set(categories)]

    function getCategory(cate) {
    setSelectedCategory(cate);
  }

   let filteredProducts = selectedCategory === "All"
    ? store
    : store.filter(item => item.category === selectedCategory);


    

//Sort the products by fetch, price ascending e.t.c
    if(sortBy === 'fetch') sorteditems = store;
    if(sortBy === 'price asc') sorteditems = store.slice().sort((a,b) => a.price - b.price)
    if(sortBy === 'price des') sorteditems = store.slice().sort((a,b) => b.price - a.price)
    if(sortBy === 'id') sorteditems = store.slice().sort((a,b) => b.id - a.id)
      

//return all the fucntion, state to be use in a components that needs it
    return <storeConext.Provider value={{
        isLoading,setIsLoading,isError,setIsError,store,setStore, showMenu, setShowMenu,
        changeMenu, changeMenuToFalse, sortBy, setSortBy, sorteditems, filterCategory,
         filteredProducts, getCategory, categories, dark,TogglingDarkMode
    }}>{children}</storeConext.Provider>
}


 export function useStore(){
    const context = useContext(storeConext)
    return context
}

