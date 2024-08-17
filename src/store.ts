import { create } from 'zustand';

// better to seperate use cases by usage. Example, useStore for counter related
// features while having a useTopMenu for tom menu related features
type Store = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useStore = create<Store>((set) => ({
  count: 19,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
