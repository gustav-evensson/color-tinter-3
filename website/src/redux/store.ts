import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { colorSlice } from "./slices/colorSlice";
import { colorCountSlice } from "./slices/colorCountSlice";
import { themeSlice } from "./slices/shadcnSlice";

export const createStore = () =>
  configureStore({
    reducer: {
      colorCount: colorCountSlice.reducer,
      color: colorSlice.reducer,
      theme: themeSlice.reducer,
    },
  });

export type StoreType = ReturnType<typeof createStore>;
export type RootState = ReturnType<StoreType["getState"]>;
export type AppDispatch = StoreType["dispatch"];

// export colorCountSlice tools
export const { setColorCount } = colorCountSlice.actions;
export const useColorCount = () => useSelector((state: RootState) => state.colorCount.value);

// export colorSlice tools
export const { setColor } = colorSlice.actions;
export const useColor = () => useSelector((state: RootState) => state.color.value);

// export themeSlice tools
export const { setTheme } = themeSlice.actions;
export const useTheme = () => useSelector((state: RootState) => state.theme.value);
