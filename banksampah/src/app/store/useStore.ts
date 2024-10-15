import { create, StateCreator } from 'zustand';

// Interface for user state
interface UserState {
  name: string;
  role: string;
  setUser: (name: string, role: string) => void;
}

// Interface for waste data state
interface WasteState {
  barChartData: number[];
  barChartCategories: string[];
  trendChartData: number[];
  trendChartCategories: string[];
  setBarChartData: (data: number[]) => void;
  setTrendChartData: (data: number[]) => void;
  setBarChartCategories: (categories: string[]) => void;
  setTrendChartCategories: (categories: string[]) => void;
}

// Create Zustand store
const useStore = create<UserState & WasteState>(
  (set: Parameters<StateCreator<UserState & WasteState>>[0]) => ({
    // User state
    name: 'Bank Sampah: Sari Wangi',
    role: 'nasabah',
    setUser: (name: string, role: string) => set({ name, role }),

    // Waste data state
    barChartData: [2.7, 2.5, 1.8, 1.2, 0.5], // Properly initialized as an array
    barChartCategories: ['Ember Campuran', 'Aqua Botol Bersih', 'Tetrapack', 'PET A', 'Botol Beling'], // Properly initialized as an array
    trendChartData: [0.4, 1.8, 1.8, 1.2], // Properly initialized as an array
    trendChartCategories: ['17 Jan 2024', '21 Feb 2024', '27 Mar 2024', '24 Apr 2024'], // Properly initialized as an array
    setBarChartData: (data: number[]) => set({ barChartData: data }),
    setTrendChartData: (data: number[]) => set({ trendChartData: data }),
    setBarChartCategories: (categories: string[]) => set({ barChartCategories: categories }),
    setTrendChartCategories: (categories: string[]) => set({ trendChartCategories: categories }),
  })
);

export default useStore;
