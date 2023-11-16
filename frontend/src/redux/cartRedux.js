import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },

    // If you don't know what these are look into what redux does
    // Video with a quick overview
    // https://www.youtube.com/watch?v=_shA5Xwe8_4
    reducers: {
        addProduct: (state, action) => {
            const prodExists = state.products.find(item => item._id === action.payload._id);

            if (prodExists) {
                prodExists.quantity += action.payload.quantity;
                state.quantity += action.payload.quantity;
            } else {
                state.quantity += action.payload.quantity;
                state.products.push(action.payload);
            }
            state.total += action.payload.price * action.payload.quantity;
        },
        toRemove:(state, action) =>{
            const id = action.payload._id;
            if (state.quantity > 0){
                state.quantity -= action.payload.quantity;
            }

            state.total -= action.payload.price * action.payload.quantity;

            state.products = state.products.filter(item => item._id !== id);
        },
        toRemoveAll:(state, action) =>{
            const { id } = action.payload;
            state.quantity = 0;
            state.products = state.products.filter(item => item.id !== id);
            state.total = 0;
        },
    },
});

export const {addProduct, toRemove, toRemoveAll} = cartSlice.actions;
export default cartSlice.reducer;