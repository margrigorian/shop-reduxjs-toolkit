import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/slice-products";
import basketSlice from "./slices/slice-basket";

const store = configureStore({
    reducer: {
        products: productSlice,
        basket: basketSlice
    }
})

export default store;