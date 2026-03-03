"use client";

import { Suspense } from "react";
import App from "./src/App";
import PageLoader from "./src/components/PageLoader";
import "./src/i18n";

export default function Home() {
  return (
    <Suspense fallback={<PageLoader />}>
      <App />
    </Suspense>
  );
}
