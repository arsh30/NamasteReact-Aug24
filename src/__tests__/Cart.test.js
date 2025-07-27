import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../components/RestaurantMenu";
import MOCK_DATA from "../mocks/mockRestaurantMenu.json";
import appStore from "../utils/appStore";
import { Provider } from "react-redux";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../components/Cart";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("Should load restauramt menu component", async () => {
  // when we load restaurantMenu (means kisi res pr click krke open kiya hai)
  // there is a network call on that page, so we will have to mock fetch once again, and also mock data

  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordionHeader = screen.getByText("Late Night Cravings (8)");

  fireEvent.click(accordionHeader); // now when we click on the header, it displays the List of Menus

  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(8);

  const addBtns = screen.getAllByRole("button", { name: "Add to cart" });
  fireEvent.click(addBtns[0]); // when we click on add btn, then header should change, so we have to import the header as well.

  expect(screen.getByText("Cart- (1- items)")).toBeInTheDocument();

//   console.log(screen.getAllByTestId("foodItems").length).toBe(10);
  
  expect(screen.getAllByTestId("foodItems").length).toBe(10)
});

it("Should cart page have 2 component", () => {});
