import React from "react";

const PageLoager = React.memo(() => {
  return (
    <div
      className={
        "visible fixed inset-0 z-[9999] grid place-items-center bg-primary transition-opacity duration-300"
      }
    >
      <div className={"loader"}></div>
    </div>
  );
});

export default PageLoager;
