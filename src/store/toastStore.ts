import {create} from 'zustand';
export type ToastType = 'error' | 'info';

export interface ToastItem {
  id: number;
  message: string;
  type: ToastType;
}

interface ToastStore {
  toasts: ToastItem[];
  addToast: (message: string, type?: ToastType) => void;
  removeToast: (id: number) => void;
}

const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  addToast: (message: string, type = 'info') => {
    set((state) => ({
      toasts: [...state.toasts, { message, type, id: Date.now()}],
    }))
  },
  removeToast: (id) => {
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id != id)
    }))
  }
}));

export default useToastStore;