import React, { createContext, useContext, useState } from 'react';

const AlertContext = createContext();

export const useAlertContext = () => {
  return useContext(AlertContext);
};

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);

  const onOpen = (alert) => {
    setAlert(alert);
    // Display alert logic here, for example using a modal or toast
    alert(alert.message);
  };

  const onClose = () => {
    setAlert(null);
  };

  return (
    <AlertContext.Provider value={{ alert, onOpen, onClose }}>
      {children}
    </AlertContext.Provider>
  );
};
