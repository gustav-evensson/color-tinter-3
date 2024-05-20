import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function for indexing objects with strings
export function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
  // @ts-ignore
  return key in obj;
}

export function getByString<O>(obj: O, key: string) {
  if(hasKey(obj, key)) {
    return obj[key]
  } else{
    throw Error(`Could not find key of: ${key}`)
  }
}
