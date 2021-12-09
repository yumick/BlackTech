import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { IProduct } from "../../interface/product";

interface IProductState {
  data: IProduct[];
}

const initialState: IProductState = {
  data: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductsAction: (state, action: PayloadAction<IProduct[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setProductsAction } = productSlice.actions;
export const selectProducts = (state: RootState) => state.products.data;
export default productSlice.reducer;
