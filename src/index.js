import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";

import { Provider } from "./context/context";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <SpeechProvider appId="5dc28ad6-2842-4253-b191-31e8dbee23e8" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,

  document.getElementById("root")
);
