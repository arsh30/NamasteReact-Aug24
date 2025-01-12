import React from "react";
import { useRouteError } from "react-router-dom";
const NotFound = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Oops!!</h1>
      <h3>Something went wrong</h3>
      <h3>
        {error?.status}: {error?.statusText}
      </h3>
    </div>
  );
};

export default NotFound;
