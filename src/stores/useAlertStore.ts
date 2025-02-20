import { create } from "zustand";

type Alert = {
  id: string;
  message: string;
};

type AlertStore = {
  alerts: Alert[];
  addAlert: (message: string) => void;
  removeAlert: (id: string) => void;
};

export const useAlertStore = create<AlertStore>((set) => ({
  alerts: [],
  addAlert: (message) => {
    const id = Math.random().toString(36).substring(2, 9);
    set((state) => ({ alerts: [...state.alerts, { id, message }] }));

    // 5초 후 자동 삭제
    setTimeout(() => {
      set((state) => ({
        alerts: state.alerts.filter((alert) => alert.id !== id),
      }));
    }, 5000);
  },
  removeAlert: (id) =>
    set((state) => ({
      alerts: state.alerts.filter((alert) => alert.id !== id),
    })),
}));
