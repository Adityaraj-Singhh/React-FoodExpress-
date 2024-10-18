import { createSlice, current } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem: (state,action) => {
            //mutating the state -> Note: In older version of Redux(vanilla) it was not allowed to mutate directly and returning was necessary .[all the older things are now taken care by Immer library in Redux toolkit behind the scenes]
            //But in redux toolkit we have to mutate and returning is not required.
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        //originalState = {items: ["Pizza"]}
        clearCart: (state) => {
            state.items.length = 0; // [] -> Here it is getting mutated
            // state = []; //This won't work// Here we are not mutating, we are just giving refernce | This locally makes the state empty, but don't change the original state.
            // console.log(current(state));

            // return { items: []}; //This is also work | this new [] will be repl
            //RTK -> Either Mutate the existing state or return a new State.

        },
    }, 

});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;