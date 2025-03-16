import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import NotFound from "./components/NotFound";
import About from "./components/About";
import Contactus from "./components/Contactus";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";

// chunking
// lazy loading
// code splitting
// Dynamic bundling

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    // make an api and fetch the data and set userName
    const data = {
      name: "Arsh",
    };

    setUserName(data.name);
  }, []);

  // Now update the Context every where in the project,
  // Note: suppose agr Header ko hum, sirf UserContext.Provider se wrap krte toh sirf Header me hi use hota vo
  // Note2 : Agr nested Provider use krte to kya hota hai, so Header ki value sirf Elon musk hoti hai, and usse bhar jo hai Arsh hoti value
  // Eg
  //  return (
  //    <UserContext.Provider value={{ loggedInUser: userName }}>
  //      <div className="App">
  //        <UserContext.Provider value={{ loggedInUser: "Elon musk" }}>
  //          <Header />
  //        </UserContext.Provider>
  //        <Outlet />
  //      </div>
  //    </UserContext.Provider>
  //  );

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="App">
        <UserContext.Provider value={{ loggedInUser: "Elon musk" }}>
          <Header />
        </UserContext.Provider>
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contactus />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },

      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
