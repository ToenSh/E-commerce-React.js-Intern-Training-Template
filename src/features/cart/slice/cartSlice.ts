import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";

export interface TCartItem {
    id: number,
    categoryID: number,
    name: string,
    price: number,
    image: string,
    quantity: number,
} 

const initialState: TCartItem[] = []

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addProduct: state => {
            state.push({id: 1, categoryID: 3, name: 'name', price: 100, image: '/src/assets/all-weather-boots.png', quantity: 0})
        },
        increaseQuantity: (state, action) => {
            //increase item quantity            
        },
        decreaseQuantity: (state, action) => {
            //decrease item quantity
        },
        deleteAllProducts: () => {
            return [];
        }
    }
})

export const {addProduct, increaseQuantity, decreaseQuantity, deleteAllProducts} = cartSlice.actions;
export const selectCartItems = (state: RootState) => state.cart
export default cartSlice.reducer;