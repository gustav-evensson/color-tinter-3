import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
      // Normalize the color values
      state.value = {
        h: action.payload.h,
        s: parseFloat(action.payload.s.toFixed(4)),
        l: parseFloat(action.payload.l.toFixed(4)),
        a: action.payload.a,
      }
    },
  },
});
