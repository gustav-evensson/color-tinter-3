"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { createStore, setColor } from "../../redux/store";
import type { HslaColor } from "react-colorful";

export default function GlobalReduxProvider({
  colorCount,
  color,
  children,
}: {
  colorCount: number;
  color: HslaColor;
  children: React.ReactNode;
}) {
  const storeRef = useRef<ReturnType<typeof createStore> | null>(null);
  if (!storeRef.current) {
    storeRef.current = createStore();
    storeRef.current.dispatch(setColor(color));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}