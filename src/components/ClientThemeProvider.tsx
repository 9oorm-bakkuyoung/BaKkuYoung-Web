"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "@goorm-dev/vapor-core";

export const ClientThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // 클라이언트 사이드에서만 적용
    setIsClient(true);
  }, []);

  if (!isClient) return <>{children}</>;

  return <ThemeProvider>{children}</ThemeProvider>;
};
