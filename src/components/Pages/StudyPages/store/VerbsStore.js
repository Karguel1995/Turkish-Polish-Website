import React, { createContext, useState } from 'react';

export const VerbsContext = createContext(null);

const VerbsStore = ({ children }) => {
  const [selectedVerbList, setSelectedVerbList] = useState([]);


  return (
    <VerbsContext.Provider value={{
      selectedVerbList,
      setSelectedVerbList
    }}>
      {children}
    </VerbsContext.Provider>
  )
};

export default VerbsStore