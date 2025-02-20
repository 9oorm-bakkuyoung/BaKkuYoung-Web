"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "@goorm-dev/vapor-core";
import { usePolling } from "@/app/hooks/usePolling";
import AlertStack from "./AlertStack";

export const ClientThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  usePolling();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // 클라이언트 사이드에서만 적용
    setIsClient(true);
  }, []);

  if (!isClient) return <>{children}</>;

  return (
    <ThemeProvider>
      {children}
      <AlertStack />
    </ThemeProvider>
  );
};
