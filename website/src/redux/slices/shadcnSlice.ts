import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { HslaColor } from "react-colorful";
import type { Theme, ThemeColor, Radius } from "@/lib/colors/themes";
import { themes} from "@/lib/colors/themes";


export interface ThemeState {
  value: Theme;
}

const initialState: ThemeState = {
  value: themes.zinc,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.value = action.payload;
    },
  },
});
