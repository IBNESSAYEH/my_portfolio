import React, { createContext, useState } from 'react';

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [title] = useState("Abdellatif IBNESSAYEH - SpringBoot - React js Developer");
  return (
    <PortfolioContext.Provider value={{ title }}>
      {children}
    </PortfolioContext.Provider>
  );
};