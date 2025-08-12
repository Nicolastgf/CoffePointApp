import { create } from 'zustand';
import { persist } from 'zustand/middleware';


export const useAuthSessionStore = create(
    persist(
        (set) => ({
            token: null,
            user: null,
            setToken: (token) => set({ token }),
            setUser: (user) => set({ user }),
            logout: () => set({ token: null, user: null }),
        })

    ))