import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import i18n (needs to be bundled ;))
import "./i18n";
import PageLoager from "./components/PageLoader.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<PageLoager />}>
      <App />
    </Suspense>
  </React.StrictMode>,
);
