import { create } from 'zustand';

interface ISidebarStore {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (state: boolean) => void;
}

const useSidebarStore = create<ISidebarStore>(set => ({
  isSidebarOpen: false,
  setIsSidebarOpen(state) {
    set(() => ({ isSidebarOpen: state }));
  },
}));

export default useSidebarStore;
