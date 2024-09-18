import { create } from 'zustand'

import { User } from '@models/user'

type UserState = {
  user: User | null
  setUser: (value: User | null) => void
}

export const useUserStore = create<UserState>(set => ({
  user: null,
  setUser: value => set({ user: value }),
}))
