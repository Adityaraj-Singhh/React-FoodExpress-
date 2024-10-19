import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";

const Cart = ()=>{

    //this will work fine, but its less efficient
    // const store = useSelector((store)=>store);
    // const cartItems = store.cart.items;

    //This is the same thing as of above, but it is more efficient and it is only fetching required data.(It is only subscribing to a specifice portion)
    const cartItems = useSelector((store) => store.cart.items); //It only only get changed, when there is a change in the items of cart, and independent of other changes.

    const dispatch = useDispatch();

    const handleClearCart = () =>{
        dispatch(clearCart())
    }
    const handlePopCart = () =>{
      dispatch(removeItem())
    }

    // return (<div className="text-center m-4 p-4">
    //     <h1 className="text-2xl font-bold">Cart</h1>
    //     <div className="w-6/12 m-auto">
    //         <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
    //         {cartItems.length == 0 && <h1>Your Cart is waiting to be filled</h1>}
    //         <ItemList items={cartItems}/>
    //     </div>
         
    // </div>)

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-8">
          <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
            {/* Header */}
            <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
              Your Cart
            </h1>
      
            {/* Clear Cart Button */}
            <div className="flex justify-center mb-4">
              <button
                className="px-5 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-all"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            </div>

            <div className="flex justify-center mb-4">
              <button
                className="px-5 py-2 bg-blue-300 text-white font-semibold rounded-lg hover:bg-blue-400 transition-all"
                onClick={handlePopCart}
              >
                Remove last item
              </button>
            </div>
            

      
            {/* Empty Cart Message */}
            {cartItems.length === 0 ? (
              <h2 className="text-xl text-gray-600 text-center mt-4">
                Your cart is waiting to be filled!
              </h2>
            ) : (
              // Render ItemList if cartItems are available
              <div className="mt-6">
                <ItemList items={cartItems} />
              </div>
            )}
          </div>
        </div>
      );
      
};

export default Cart;