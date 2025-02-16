import { writable, type Writable } from "svelte/store";

const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

export const theme: Writable<"dark" | "light"> = writable(
  prefersDarkMode.matches ? "dark" : "light",
);

const updateThemeOnChange = (e: MediaQueryListEvent) =>
  theme.set(e.matches ? "dark" : "light");

prefersDarkMode.addEventListener("change", updateThemeOnChange);
