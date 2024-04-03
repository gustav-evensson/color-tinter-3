
import chroma from "chroma-js";
import { type HslaColor } from "react-colorful";

export const formatHex = (color: HslaColor) => {

  const hslaString = `hsla(${color.h}, ${color.s}%, ${color.l}%, ${color.a})`;

  return chroma(hslaString).hex();

}

export const formatHsl = (color: HslaColor) => {

  return `hsla(${color.h}, ${color.s}%, ${color.l}%, ${color.a})`;

}

export const formatRgb = (color: HslaColor) => {

  const hslaString = `hsla(${color.h}, ${color.s}%, ${color.l}%, ${color.a})`;

  return chroma(hslaString).css();

}
  