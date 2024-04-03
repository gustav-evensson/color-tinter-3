import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import type { HslaColor } from "react-colorful";

export interface ColorState {
  value: HslaColor;
}

const initialState: ColorState = {
  value: { h: 150, s: 0, l: 0, a: 1 } as HslaColor,
};

export const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    setColor: (state, action: PayloadAction<HslaColor>) => {
      state.value = action.payload;
    },
  },
});

export const createStore = () =>
  configureStore({
    reducer: {
      color: colorSlice.reducer,
    },
  });

export const { setColor } = colorSlice.actions;

export type StoreType = ReturnType<typeof createStore>;
export type RootState = ReturnType<StoreType["getState"]>;
export type AppDispatch = StoreType["dispatch"];

export const useColor = () => useSelector((state: RootState) => state.color.value);
