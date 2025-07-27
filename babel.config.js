module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { runtime: "automatic" }],

    // what is babel?
    // babel is transpiler, it convert the modern code, into traditional way that our browser understands 
    // now babel/preset-react - is converting the JSX code to html, so that it can read properly
  ],
};
