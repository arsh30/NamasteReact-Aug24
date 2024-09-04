import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = <h1>Namaste React</h1>; // JSX

const Title = () => {
  return <h1>This is Namaste React Title</h1>;
};
// React Functional Component
const HeadingComponent = () => {
  return (
    <>
      <Title />
      {100 + 200}
      {heading}
      <h1>Heading Functional Component</h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
