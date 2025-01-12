import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent component did mount");
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <h2>This is About Component</h2>
        <UserClass name={"Arsh Class based Component"} />
      </div>
    );
  }
}

export default About;
