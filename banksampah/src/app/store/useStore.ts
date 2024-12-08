// services/useStore.ts
import { create } from 'zustand';

interface Setoran {
  id: number;
  tanggalSetor: string;
  namaSampah: string;
  berat: number;
  rupiah: number;
}

interface UserState {
  token: string;
  role: string;
  nama: string;
  noRumah: string;
  tabungan: number;
  setoran: Setoran[];
  setUserData: (userData: Partial<UserState>) => void;
}

const useStore = create<UserState>((set) => ({
  token: '',
  role: '',
  nama: '',
  noRumah: '',
  tabungan: 0,
  setoran: [],
  setUserData: (userData) => set(userData),
}));

export default useStore;


// // Interface for user state
// interface UserState {
//   name: string;
//   role: string;
//   setUser: (name: string, role: string) => void;
// }

// // Interface for waste data state
// interface WasteState {
//   barChartData: number[];
//   barChartCategories: string[];
//   trendChartData: number[];
//   trendChartCategories: string[];
//   setBarChartData: (data: number[]) => void;
//   setTrendChartData: (data: number[]) => void;
//   setBarChartCategories: (categories: string[]) => void;
//   setTrendChartCategories: (categories: string[]) => void;
// }

// // Create Zustand store
// const useStore = create<UserState & WasteState>(
//   (set: Parameters<StateCreator<UserState & WasteState>>[0]) => ({
//     name: 'Bank Sampah: Sari Wangi',
//     role: 'nasabah',
//     setUser: (name: string, role: string) => set({ name, role }),

//     // Waste data state
//     barChartData: [2.7, 2.5, 1.8, 1.2, 0.5],
//     barChartCategories: ['Ember Campuran', 'Aqua Botol Bersih', 'Tetrapack', 'PET A', 'Botol Beling'],
//     trendChartData: [0.4, 1.8, 1.8, 1.2],
//     trendChartCategories: ['17 Jan 2024', '21 Feb 2024', '27 Mar 2024', '24 Apr 2024'],
//     setBarChartData: (data: number[]) => set({ barChartData: data }),
//     setTrendChartData: (data: number[]) => set({ trendChartData: data }),
//     setBarChartCategories: (categories: string[]) => set({ barChartCategories: categories }),
//     setTrendChartCategories: (categories: string[]) => set({ trendChartCategories: categories }),
//   })
// );

// export default useStore;
