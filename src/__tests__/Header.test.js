const { render, screen, fireEvent } = require("@testing-library/react");
import { Provider } from "react-redux";
import Header from "../components/Header";
import appStore from "../utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

it("Should load Header Component with a login button", () => {
  // 1. Render Component , 2. Querying (get something), 3. assertion (Expect something)
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  ); // Note: we are getting error on this screen, because, currently it understands all the react code, but In this we are using "Redux ie useSelector", then
  // it does not know, how to render useSelector (because it is part of redux)
  // so we have to provide the store to Header as well, so we have to Wrap with Provider and give the store as well.
  // - now we have to wrap this with Browser Router as well , because isme Link Use krre hai, and BROWSER ROuter ke andr use hota hai
  // othwerwise we will get errors.

  // Quering
  const loginBtn = screen.getByRole("button", { name: "Login" }); // 1st way, If there are multiple button, and we want to find specific the button, whose name is login
  // const loginBtn = screen.getByText("Login"); // 2nd way-> note: but getByRole is good way to find something

  expect(loginBtn).toBeInTheDocument();
});

it("Should render Header Component with Cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // const cartItem = screen.getByText("Cart- (0- items)");
  const cartItem = screen.getByText(/Cart/); // we can pass the regex as well

  expect(cartItem).toBeInTheDocument();
});

it("Should change button login to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginBtn = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginBtn); // means button par click krre hai,
  const logoutBtn = screen.getByRole("button", { name: "Logout" });
  expect(logoutBtn).toBeInTheDocument();
});
