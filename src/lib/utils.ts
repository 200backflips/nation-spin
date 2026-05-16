import type { Country } from "@/hooks/random-country";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomCountry(countries: Country[]) {
  if (!countries || countries.length === 0) {
    return null;
  }
  return countries[Math.floor(Math.random() * countries.length)];
}
