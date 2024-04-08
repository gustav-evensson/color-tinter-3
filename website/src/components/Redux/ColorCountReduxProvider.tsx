"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { createStore, setColorCount } from "../../redux/tools/store";

export default function ColorCountReduxProvider({
  colorCount,
  children,
}: {
  colorCount: number;
  children: React.ReactNode;
}) {
  const storeRef = useRef<ReturnType<typeof createStore> | null>(null);
  if (!storeRef.current) {
    storeRef.current = createStore();
    storeRef.current.dispatch(setColorCount(colorCount));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}