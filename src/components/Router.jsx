import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from '../Main'
import Header from './Header/Header'
import Profile from '../Pages/Profile/Profile'
import Registration from '../Pages/Registration/Registration'
import Cart from '../Pages/Cart/Cart.jsx'
import {Watches} from '../Pages/Watches/Watches.jsx'
import Login from '../Pages/LogIn/LoginPage.jsx'
import Details from '../Pages/Details/Details.jsx'



const router = createBrowserRouter([
    {path:'/', element:<Main/>},
    {path:'/header',element:<Header/>},
    {path:'/profile',element:<Profile/>},
    {path:'/registration',element:<Registration/>},
    {path:'/cart',element:<Cart/>},
    {path:'/Watches',element:<Watches/>},
    {path:'/Login',element:<Login/>},
    {path:`/Details/:id`,element:<Details/>},
    {path:`/Home`,element:<Main/>}
    
    

])

const Router = () => {
    return <RouterProvider router={router}/>
} 
export default Router