import { readableColor, readableColorIsBlack } from "color2k"

export const getReadableColor = (clr: string): { color: "#fff" | "#000", isBlack: boolean } => {
  const color = readableColor(clr) as "#fff" | "#000"
  const isBlack = readableColorIsBlack(clr)
  return {
    color: color,
    isBlack: isBlack
  }
}