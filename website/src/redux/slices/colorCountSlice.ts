import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ColorCountState {
  value: number;
}

const initialState: ColorCountState = {
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
