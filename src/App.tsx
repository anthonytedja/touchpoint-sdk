import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import React from "react";
import "./App.css";

declare global {
  interface Window {
    Touchpoint: any;
  }
}

const App = () => {
  const [data, setData] = useState(undefined);
  const urlParams = new URLSearchParams(window.location.search);
  const appID = urlParams.get("app_id");
  const pod = urlParams.get("pod");

  const Init = () => {
    window.Touchpoint.initialize({
      // Please check documentation for other Touchpoint settings that can be configured
      settings: {
        containerStyle: {
          borderRadius: "8px",
          boxShadow:
            "0px 3px 5px 0px rgba(0,0,0,0.2), 0px 1px 18px 0px rgba(0,0,0,0.12), 0px 6px 10px 0px rgba(0,0,0,0.14)",
        },
      },
      visitor: {
        // Pass data points from your site/application to identify the current respondent
        // id: VISITOR_ID,
        // email: VISITOR_EMAIL,
        // role: VISITOR_ROLE,
        // etc.
      },
      publisher: {
        // Please do not make edits below
        app_id: appID ?? "LQbhYGRAz4Lvo84O",
        pod: pod ?? "sit1",
      },
    });
  };

  window.addEventListener("load", Init);
  window.addEventListener("TouchpointLoaded", function () {
    setTimeout(() => {
      setData(window.Touchpoint);
    }, 2500);
  });

  return (
    <div className="App">
      <header className="App-header">
        {data ? (
          <textarea placeholder={JSON.stringify(data, undefined, 1)} readOnly />
        ) : (
          <img src={logo} className="App-logo" alt="logo" />
        )}
      </header>
    </div>
  );
};

export default App;
