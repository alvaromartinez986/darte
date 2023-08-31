import React from "react";
import useFetchData from "../hooks/useFetchData";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  let { data: categories } = useFetchData("/categories?sort=order");
  categories ||= [];
  const selectedStateObj = {
    categories,
  };

  return (
    <AppContext.Provider value={selectedStateObj}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error("AppContext must be used within an AppContext");
  }
  return context;
};

export { AppContext, AppProvider, useAppContext };
