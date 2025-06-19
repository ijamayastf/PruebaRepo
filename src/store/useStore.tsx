import {create} from 'zustand';


type Store = {
  optionSelect: string | null;
  useData: string;
  token:string;
  setOptionSelect: (optionSelect: string | null) => void;
  setUserData: (useData: string) => void;
  setToken: (token: string) => void;
  
};

export const useStore = create<Store>((set) => ({
  optionSelect: 'principal',
  useData: '',
  token:'',
  setOptionSelect: (optionSelect) => set({ optionSelect }),
  setUserData: (useData) => set({ useData }),
  setToken: (token) => set({ token })
}));