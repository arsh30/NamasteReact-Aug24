import { createContext } from "react";

/*
1. In createContext function,we will give some piece of information, that it will hold,
   it kind of central global object


*/

const UserContext = createContext({
  loggedInUser: "Default User",
});

export default UserContext;
