// const heading = React.createElement("h1",{},"Hello World from React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)

/*
<div id="parent">
  <div id="child1">
    <h1>Heading 1</h1>
    <h1>Heading 2</h1>
  </div>

  <div id="child2">
    <h1>Heading 1</h1>
    <h1>Heading 2</h1>
  </div>
</div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "child Heading 1"),
    React.createElement("h2", {}, "child Heading 2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Child Heading 1"),
    React.createElement("h2", {}, "Child Heading 2"),
  ]),
]);

console.log(parent); // It is React Element [js object] => becomes HTML (Browser understands) => root.render (it convert the object to Html Element that browser runs)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
