import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState(undefined);

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
        app_id: "LQbhYGRAz4Lvo84O",
        pod: "sit1",
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
          <code>{JSON.stringify(data, undefined, 1)}</code>
        ) : (
          <img src={logo} className="App-logo" alt="logo" />
        )}
      </header>
    </div>
  );
};

export default App;
