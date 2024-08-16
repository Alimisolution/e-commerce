import { createContext, useContext, useState, useEffect } from "react"
 const storeConext = createContext(null);

export default function StoreProvider({children}){
    const [isLoading, setIsLoading] = useState(false);
    const [store, setStore] = useState([])
    const [isError, setIsError] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const [search, setSearch] = useState("")
    const products = "https://fakestoreapi.com/products";    
    

    function changeMenu(){
        setShowMenu(true)
    }

     function changeMenuToFalse(){
        setShowMenu(false)
    }


async function fetchProducts(){
    setIsLoading(true)
  const res = await fetch(products)
  const data = await res.json()
  setStore(data)
  setIsLoading(false)
  
}

const SearchProduct = search.length > 0 ? store.filter(products => `${products.name}`.toLowerCase().includes(`${search}`.toLowerCase)) : store

useEffect(() =>{
    fetchProducts()
}, [])



    return <storeConext.Provider value={{
        isLoading,setIsLoading,isError,setIsError,store,setStore, showMenu, setShowMenu, changeMenu, changeMenuToFalse, search, SearchProduct,setSearch
    }}>{children}</storeConext.Provider>
}


 export function useStore(){
    const context = useContext(storeConext)
    return context
}

