import React, { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
import errorSVG from "../../assets/error.svg";

function Alert() {
  const { alert } = useContext(AlertContext);

  return (
    <div className="mb-2 flex flex-row gap-1 items-center justify-start">
      <div className="flex justify-center items-center bg-white rounded-full">
        {alert && alert.msg && (
          <img src={errorSVG} width={16} alt="error-icon" />
        )}
      </div>
      <span className="text-white">{alert && alert.msg}</span>
    </div>
  );
}

export default Alert;
