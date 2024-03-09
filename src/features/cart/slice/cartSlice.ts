import { RootState } from '@/app/store';
import { createSlice } from '@reduxjs/toolkit';

export interface TCartItem {
  id: number;
  categoryID: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const initialState: TCartItem[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      const existingProduct = state.findIndex(
        (item) => item.name === action.payload.name
      );
      if (existingProduct !== -1) {
        state[existingProduct].quantity++;
      } else state.push(action.payload);
    },
    increaseQuantity: (state, action) => {
      const index = state.findIndex((item) => item.name === action.payload);
      if (index !== -1) {
        state[index].quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const index = state.findIndex((item) => item.name === action.payload);
      if (index !== -1 && state[index].quantity > 1) {
        state[index].quantity--;
      }
    },
    deleteProduct: (state, action) => {
      return state.filter((item) => item.name !== action.payload);
    },
  },
});

export const { addProduct, increaseQuantity, decreaseQuantity, deleteProduct } =
  cartSlice.actions;
export const selectCartItems = (state: RootState) => state.cart;
export default cartSlice.reducer;
