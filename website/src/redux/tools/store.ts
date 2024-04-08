import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export interface ColorCountState {
  value: number;
}

const initialState: { value: number } = {
  value: 9,
};

export const colorCountSlice = createSlice({
  name: "colorCount",
  initialState,
  reducers: {
    setColorCount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const createStore = () =>
  configureStore({
    reducer: {
      colorCount: colorCountSlice.reducer,
    },
  });

export const { setColorCount } = colorCountSlice.actions;

export type StoreType = ReturnType<typeof createStore>;
export type RootState = ReturnType<StoreType["getState"]>;
export type AppDispatch = StoreType["dispatch"];

export const useColorCount = () => useSelector((state: RootState) => state.colorCount.value);
