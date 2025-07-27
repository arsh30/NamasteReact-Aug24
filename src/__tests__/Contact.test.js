import { render, screen } from "@testing-library/react";
import Contactus from "../components/Contactus";
import "@testing-library/jest-dom"; // to use -> toBeInDocument function, otherwise we will get error.

describe("Contact Us page Test Cases", () => {
  // beforeAll(() => {
  //   // One-time config or mock setup
  // });

  // beforeEach(() => {
  //   // Fresh render before each test
  //   // render(<MyComponent />);
  // });

  // afterEach(() => {
  //   // cleanup(); // clean DOM between tests
  // });

  // afterAll(() => {
  //   console.log('after all');
    
  // })

  test("should load contact us component ", () => {
    //Important note: when ever you are testing a react component,
    // you have to render the Component onto the jsdom first

    render(<Contactus />); //- currently it will render JSX, and is not enabled for our react application, so how to enable this
    // add @babel/preset-react , include this into babel.config.js [Note: this is render on jsdom]
    /*
        module.exports = {
    presets: [
        ["@babel/preset-env", { targets: { node: "current" } }],
        ["@babel/preset-react", { runtime: "automatic" }], // Add this code., automatic agr Nahi likhte then we get errors

        // what is babel?
        // babel is transpiler, it convert the modern code, into traditional way that our browser understands 
        // now babel/preset-react - is converting the JSX code to html for Testing Library, so that it can read properly
    ],
    };

    */

    // How will we check the component, is loaded or not??
    // so check, whether the heading is loading into the UI or not
    const heading = screen.getByRole("heading"); // it will find all the heading in the contact us form, because it has Area Role bydefault, Jo render screen se screen render hui hai, usme check kr rahe hai ki heading hai ya nahi[ kuch dhund rahe hai]
    // [aria role: An ARIA role tells assistive tech what type of element something is , example: heading, button, link, image ]
    // Sometimes you create custom components (e.g., a <div> that acts like a button). In those cases, you must manually assign an ARIA role for screen readers:
    // Example:
    // <div role="button" tabindex="0" onClick={handleClick}>
    //   Click Me
    // </div>;

    // If we want to get the specific Text from the component,
    // Example: <p>This is a paragraph</p>
    // and we want to get the text ->  screen.getByText("This is a paragraph");

    // expect is assertions
    expect(heading).toBeInTheDocument(); // check it is available in document or not.

    // Note:
    // TypeError: expect(...).toBeInTheDocument is not a function
    /*
  so to run this properly we have to install one more library
  @testing-library/jest-dom
  */
  });

  test("should load button inside the ContactUs component or not", () => {
    render(<Contactus />); // Here we are rendering, JSX, and it is not enabled for react app, so to enable this, we need to add @babel-preset/react, {runtime:automatic}, in babel config.js
    const button = screen.getByRole("button"); // it will find all the buttons in contact us component, so this will ensure that the component has loaded or not
    // const button = screen.getByText("Submit"); // other way to find something on the component, means By Text

    expect(button).toBeInTheDocument(); // to work this, we need to add one more libaray, testing-library/jest-dom (import this on top)
  });

  // Note: If we get the error, then it is displayed on the Terminal, that what was loaded on the UI (gives proper loaded component )

  test("Should load input name inside the contact Component", () => {
    render(<Contactus />);

    //querying something
    const input = screen.getByPlaceholderText("Enter Name");

    // Assertion
    expect(input).toBeInTheDocument();
  });

  test("Should load 2 input boxes or not on the contact Component", () => {
    render(<Contactus />);
    // Note: if there are multiple elements, with getByRole (like multiple headings, or multiple input boxes, then we have to use "getAll", and for single "getBy")
    const inputBoxes = screen.getAllByRole("textbox");
    //console.log(inputBoxes.length); // it gives you the react element, so GetAllByRole return the JSX Element. (ie Object)

    expect(inputBoxes.length).toBe(2);
  });
});
