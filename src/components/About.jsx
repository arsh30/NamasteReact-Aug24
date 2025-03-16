import React from "react";
import UserClass from "./UserClass";

// How to get the context in this? because in function component we have hook to recieve that
// but in class component we can not use hooks , so how can we get this

import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor");
  }

  componentDidMount() {
    //console.log("parent component did mount");
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <UserContext.Consumer>
          {/* Consumer will accept a callback function, in which it get the result from context */}
          {({ loggedInUser }) => <h1 className="font-bold">User: {loggedInUser}</h1>}
        </UserContext.Consumer>
        <h2>This is About Component </h2>
        <UserClass name={"Arsh Class based Component"} />
      </div>
    );
  }
}

export default About;
