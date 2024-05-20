import chroma from "chroma-js";
import { HslaColor } from "react-colorful";
import { formatHsl } from "./colorFormat";

export const pickSpectrum = (color: HslaColor, count: number, spectrum: string) => {
  switch (spectrum) {
    case "tints":
      return getTints(color, count);
    case "shades":
      return getShades(color, count);
    case "tones-saturation":
      return getTonesSaturation(color, count);
    case "tones-mix":
      return getTonesMix(color, count);
    default:
      return getTints(color, count);
  }
};

export const getTints = (color: HslaColor, count: number) => {
  const tints = [];
  const lightness = color.l;
  const deltaLightness = 100 - lightness;

  for (let i = 0; i <= count - 1; i++) {
    const tint = {
      h: color.h,
      s: color.s,
      l: lightness + (deltaLightness / count) * i,
      a: color.a,
    };
    tints.push(tint);
  }

  return tints;
};

export const getShades = (color: HslaColor, count: number) => {
  const shades = [];
  const lightness = color.l;
  const deltaLightness = lightness;

  for (let i = 0; i <= count - 1; i++) {
    const shade = {
      h: color.h,
      s: color.s,
      l: lightness - (deltaLightness / count) * i,
      a: color.a,
    };
    shades.push(shade);
  }

  return shades;
};

export const getTonesSaturation = (color: HslaColor, count: number) => {
  const tones = [];
  const saturation = color.s;
  const deltaSaturation = saturation;

  for (let i = 0; i <= count - 1; i++) {
    const tone = {
      h: color.h,
      s: saturation - (deltaSaturation / count) * i,
      l: color.l,
      a: color.a,
    };
    tones.push(tone);
  }

  return tones;
};

export const getTonesMix = (color: HslaColor, count: number) => {
  const gray = formatHsl({ h: 0, s: 0, l: 50, a: 1 });
  const hslColor = formatHsl(color);
  const tones = [];
  let currentMix;

  for (let i = 0; i <= count - 1; i++) {
    const tone = chroma.mix(currentMix ? currentMix : hslColor, gray, 1 / count, "hsl");
    currentMix = tone;
    const toneHsl = chroma(tone).hsl();
    tones.push({
      h: toneHsl[0],
      s: toneHsl[1],
      l: toneHsl[2],
      a: color.a,
    });
  }

  return tones;
};
