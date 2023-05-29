import React, { ReactNode } from "react";

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => (
  <>{children}</>
);

export default AppProvider;
