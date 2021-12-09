import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface ICategory {
  data: string[];
}

const initialState: ICategory = {
  data: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoryAction: (state, action: PayloadAction<string[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setCategoryAction } = categorySlice.actions;
export const selectCategory = (state: RootState) => state.category.data;
export default categorySlice.reducer;
