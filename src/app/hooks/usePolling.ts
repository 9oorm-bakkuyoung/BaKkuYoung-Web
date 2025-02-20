"use client";

import { useEffect } from "react";
import { useAlertStore } from "@/stores/useAlertStore";

const fetchNewData = async () => {
  try {
    // const response = await fetch("/api/check-alert");
    // if (!response.ok) throw new Error("Failed to fetch");

    // const data = await response.json();
    const data = {
      message: "wow",
    };
    return data;
  } catch (error) {
    console.error("Polling error:", error);
    return null;
  }
};

export function usePolling(interval = 5000) {
  const addAlert = useAlertStore((state) => state.addAlert);

  useEffect(() => {
    const poll = async () => {
      const data = await fetchNewData();
      if (data?.message) {
        addAlert(data.message); // 새 알럿 추가
      }
    };

    const intervalId = setInterval(poll, interval);
    return () => clearInterval(intervalId);
  }, [interval, addAlert]);
}
