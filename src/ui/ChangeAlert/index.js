import React from "react";
import { useStorageListener } from "./useStorageListener";
import "./ChangeAlert.css";

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);

  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>
            It seems like you change your TODOs in another tab or window of the
            browser.
          </p>
          <p>Do you want to sync your TODOs?</p>
          <button
            className="TodoForm-button TodoForm-button--add"
            onClick={toggleShow}
          >
            Yes!
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };
