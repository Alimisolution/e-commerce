import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import App from './App'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import StoreProvider from './context/context'
import HomePage from './pages/Homepage/HomePage'
import DetailsPage from './pages/DetailsPage/DetailsPage'
import ProductCategory from './pages/ProductCategory/ProductCategory';
import SearchCategory from './pages/SearchCategory/SearchCategory';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' index={true} element={<HomePage/>}/>
      <Route path='/details/:id' element={<DetailsPage/>}/>
      <Route path='/category' element={<ProductCategory/>}/>
      <Route path='/searchCategory' element={<SearchCategory/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreProvider>
      <RouterProvider router={router}/>
    </StoreProvider>
  </StrictMode>,
)
