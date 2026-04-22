import { create } from 'zustand';
interface CasinoState {
  balance: number;
  unlockedTattoos: string[];
  addBalance: (amount: number) => void;
  deductBalance: (amount: number) => void;
  unlockTattoo: (id: string, cost: number) => boolean;
}
export const useCasinoStore = create<CasinoState>((set, get) => ({
  balance: 5000,
  unlockedTattoos: [],
  addBalance: (amount) => set((state) => ({ balance: state.balance + amount })),
  deductBalance: (amount) => set((state) => ({ balance: Math.max(0, state.balance - amount) })),
  unlockTattoo: (id, cost) => {
    const { balance, unlockedTattoos } = get();
    if (balance >= cost && !unlockedTattoos.includes(id)) {
      set((state) => ({
        balance: state.balance - cost,
        unlockedTattoos: [...state.unlockedTattoos, id],
      }));
      return true;
    }
    return false;
  },
}));