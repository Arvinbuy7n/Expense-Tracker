const { createContext } = require("react");

const DataContext = createContext({});

export const DataProvider = ({ children }) => {

  return <DataContext.Provider>{children}</DataContext.Provider>;
};
