// import { LOGO_URL } from "../utils/constants";
import {useState, useEffect, useContext} from "react";
import {Link} from "react-router-dom";
// import logo from "./logo.png";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {


    const[btnName,setbtnName] = useState("Login");

    const OnlineStatus = useOnlineStatus();

    const data = useContext(UserContext);
    console.log(data);

    useEffect(()=>{
        // console.log("useEffect Hook is called");
    },[btnName])

    //subscribing to the store using a selector
    const cartItems = useSelector((store) => store.cart.items);

    
    // return (
 
    //     <div className="flex justify-between shadow-xl bg-pink-100 sm:bg-yellow-100 lg:bg-green-100">
    //         <div className='logo-container'>
    //           <img className='w-56' src={logo} alt='Logo'/>
    //         </div>
    //         <div className='flex align items-center'>
    //             <ul className="flex p-4 m-4">
    //                 <li className="px-4">Online Status: {OnlineStatus ? "✅":"🔴"} </li>
    //                 <li className="px-4"><Link to="/home">Home</Link></li>
    //                 <li className="px-4"><NavLink to="/about">About Us</NavLink></li>
    //                 <li className="px-4"><NavLink to="/contact">Contact</NavLink></li>
    //                 <li className="px-4"><Link to="/grocery">Grocery</Link></li>

    //                 <li className="px-4"><Link to="/cart">Cart - ({cartItems.length} items)</Link></li> 
    //                 <button className="login bg-slate-500 px-3 py-1" onClick={()=>{
    //                     btnName === "Login"
    //                     ? setbtnName("Logout") : setbtnName("Login");
    //                 }}>{btnName}</button>

    //                 <li className="px-4 font-bold">{data.loggedInUser}</li>
    //             </ul>
    //         </div>
            
    //     </div>
    // );
    return (
      <header className="bg-gradient-to-r from-teal-400 to-blue-500 shadow-xl">
<div className="container mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo Section */}
            <div className="logo-container flex items-center">
              {/* <img className="w-20 lg:w-32" src={logo} alt="Logo" /> */}
              <h1 className="ml-4 text-2xl lg:text-3xl font-extrabold text-gray-800">
                FoodExpress
              </h1>
            </div>
      
            {/* Navigation Section */}
            <nav className="flex items-center space-x-8">
              <ul className="hidden sm:flex items-center space-x-6 text-lg font-medium">
                <li className="flex items-center">
                  Online Status: 
                  <span className={`ml-2 ${OnlineStatus ? 'text-green-500' : 'text-red-500'}`}>
                    {OnlineStatus ? '✅' : '🔴'}
                  </span>
                </li>
                <li>
                  <Link to="/home" className="hover:text-blue-100 transition-all duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <NavLink to="/about" className="hover:text-blue-100 transition-all duration-300">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="hover:text-blue-100 transition-all duration-300">
                    Contact
                  </NavLink>
                </li>
                <li>
                  <Link to="/grocery" className="hover:text-blue-100 transition-all duration-300">
                    Grocery
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="hover:text-blue-100 transition-all duration-300">
                    Cart - ({cartItems.length} items)
                  </Link>
                </li>
              </ul>
      
              {/* Login Button */}
              <button
                className="login bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded-md transition-all duration-300"
                onClick={() => {
                  btnName === 'Login' ? setbtnName('Logout') : setbtnName('Login');
                }}
              >
                {btnName}
              </button>
      
              {/* User Info */}
              <div className="ml-4 text-lg font-bold text-gray-800">
                Adityaraj
              </div>
      
              {/* Hamburger Menu for Small Screens */}
              <div className="sm:hidden">
                <button className="text-2xl">
                  <i className="fas fa-bars"></i>
                </button>
              </div>
            </nav>
          </div>
        </header>
      );
}

export default Header;


//When we click on login, the whole header component gets re-rendered.
//How can the value of const is getting updated? According to JS it shouldn't.
//We are able to update the value of const as it is getting re-rendered, and btnName is a whole new local variable.(updated value of btnName)

//As soon as the button is clicked, reconsiliation process takes place -> virtual DOM is compared with Actual DOM
//There was only difference in the button, so it only updates button -> that's why react is fast. React is best in DOM manipulation