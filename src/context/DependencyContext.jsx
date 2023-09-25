import { createContext, useContext } from "react";
import PropTypes from "prop-types";

const DependencyContext = createContext();
export const DependencyProvider = ({ children, data }) => {
  return (
    <DependencyContext.Provider value={{ data }}>
      {children}
    </DependencyContext.Provider>
  );
};

DependencyProvider.propTypes = {
  children: PropTypes.node,
  data: PropTypes.any,
};

export const UseDependencies = () => {
  const context = useContext(DependencyContext);
  if (!context) {
    throw new Error("useDependencies must be used within a DependencyProvider");
  }
  return context;
};
