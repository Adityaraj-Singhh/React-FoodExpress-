import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer: {   //Combined reducer for the reducer of all the reducers
        cart: cartReducer,
    }
});

export default appStore;