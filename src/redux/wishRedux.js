import {createSlice} from "@reduxjs/toolkit";

const wishSlice = createSlice({
    name: "wish",
    initialState:{
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers:{
        addWish:(state, action) => {
            state.quantity +=1;
            state.products.push(action.payload);
            state.total += action.payload.net_price *action.payload.quantity;
        },
    },
})

export const {addWish} = wishSlice.actions
export default wishSlice.reducer;