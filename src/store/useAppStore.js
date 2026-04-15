import { create } from "zustand";

export const useAppStore = create((set) => ({
  // 🌙 DARK MODE
  darkMode: false,
  toggleDarkMode: () =>
    set((state) => ({ darkMode: !state.darkMode })),

  // 🔍 SEARCH
  searchTerm: "",
  setSearchTerm: (value) => set({ searchTerm: value }),

  // 👤 USER (optional but good)
  user: null,
  setUser: (user) => set({ user }),
}));