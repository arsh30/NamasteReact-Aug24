import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/mockResList.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  /*
    jest.fn - it creates mock fetch function, it takes a callback function, and now 
    here we will mock exactly same fetch function works

    so fetch function returns a promise,
    it resolves with a json, a
    
    and then json again takes a callback function (json function ko callkrte hai thats why 1 function bnaya hai), 
    so which returns a promise
    which actually have a data
    */

  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA); // this data which return the api
    },
  });
});

it("Should search res list for burger input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);

  /*
  Sometimes it gives error
  1. fetch -> (fetch is not defined) because - fetch is part of browser part, and it is not available in the jsdom
             so create a mock function for "FETCH", we will create dummy mock fetch function

    This fetch function will not make a actual network call, because this test cases does not have browser or something 
    it does not have the capability to talk to the world. 
    this is running on JSDom, which is browser like environment, we dont any internet connection to run test cases. 

  2. our Body component uses state update and async function, so wrap the body component with 
  "act" which is from react-dom/test-utils , 
  and it returns a promise, act function takes another callback function, 
  which renders the body, and we wrap this with browserRouter, because in body component it uses link.
  
  */

  const searchBtn = screen.getByRole("button", { name: "Search" });

  // get the search Input
  // const searchInput = screen.getByPlaceholderText("Enter search"); // 1st way to find something, suppose hmko agr kuch nahi milra toh hum
  // getByTestId use krege and Body component me jakr jidr input element hai which is below: idr add krdege

  // <input
  //         type="text"
  //         className="p-2 outline-none mr-3 rounded-lg border-2 w-[100%]"
  //         placeholder="Enter search"
  //         data-testid="SearchInput" // testid should be small, here we custom attribute to this element, normally we can give this in Html

  //         name="search"
  //         value={searchTxt}
  //         onChange={(e) => setSearchTxt(e.target.value)}
  //       />

  // Note: what is custom Html Attribute and how can we access them in Js
  /*
    <div id="myDiv" data-user-id="12345"></div> // Note: we can not write this in camel case, we use kebab case only, otherwise it is not correct.

    How can we access this:

    const div = document.getElementById('myDiv');

    // Access the data-user-id
    const userId = div.dataset.userId;

    console.log(userId); // "12345"

  */

  const searchInput = screen.getByTestId("SearchInput");

  // Type in the search box
  fireEvent.change(searchInput, { target: { value: "burger" } }); // 1st argument kisme dekhna hai ie searchInput component, {} is basically simulating what we get inside e (jo event me aata hai vo sab, e.target.value given by browser
  // but here we dont have the browser)

  fireEvent.click(searchBtn);

  // now screen should load 2 cardss, how will i find my restaurant cards.
  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(2);
});

it("Should filter top Rated Restaurants", async () => {
  // 1. render - from @testing-library/react

  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardsBeforeFilter.length).toBe(20);

  // 2. Now find the button, click on it
  const topRatedFilteredBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  // 3. click on that button
  fireEvent.click(topRatedFilteredBtn);

  // 4. now when we click on that button, the number of cards should be 8
  const cardsAfterFilter = screen.getAllByTestId("resCard");

  expect(cardsAfterFilter.length).toBe(14);
});
