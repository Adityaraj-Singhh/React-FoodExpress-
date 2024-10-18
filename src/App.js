import React, {lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';  // Import your CSS file
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from './components/RestaurantCard';
import {createBrowserRouter,RouterProvider, Outlet} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error'; 
import ResMenu from './components/ResMenu';
// import Grocery from './components/Grocery'; //for lazy loading we don't implement like this.
import { Provider } from "react-redux";
import appStore from './utils/appStore';
import Cart from './components/Cart';
const Grocery = lazy(()=>import("./components/Grocery"));




const AppLayout = () => {

    return (   
        <Provider store={appStore}>
            <div className="AppLayout">
            <Header/>
            <Outlet/> 
        </div>
        </Provider>       
   )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/home",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/grocery",
                element:<Suspense fallback={<h1>Data Coming Soon</h1>}><Grocery/></Suspense> 
                

                // element:<h1>Data Coming Soon</h1> 

            },
            {
                path: "/restaurant/:resId",
                element: <ResMenu/>
            },
            {
                path: "/cart",
                element: <Cart/>
            }
            
        ],
        errorElement: <Error/>
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);




//Config Driven UI
//Ex: Swiggy has differnt offers for, differnet states.
//COntrolling the UI using data/config and this config comes from backed.

//Front-end is not only about UI - Swiggy example
//Both UI layer and data layer makes an application.

//Whenever we need to develop routes, we need to create routing configration(createBrowserRouter).
