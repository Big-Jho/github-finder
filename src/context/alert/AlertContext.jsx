import { createContext, useReducer } from "react";
import alertReducer from "./alertReducer";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = {
    alert: {},
  };

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // setAlert
  const setAlert = (msg, type) => {
    dispatch({ type: "SET_ALERT", payload: { msg, type } });

    setTimeout(() => {
      dispatch({ type: "REMOVE_ALERT" });
    }, 5000);
  };

  return (
    <AlertContext.Provider value={{ setAlert, alert: state.alert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
