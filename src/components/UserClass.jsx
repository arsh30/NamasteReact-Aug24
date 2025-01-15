import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    // constructor is basically for reciving props

    console.log("child constructor");
    super(props); // calling the constructor of the parent class ie react.component (means user class ka parent),

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        // avatar_url: "http://dummyphot.com",
      },
    };
  }

  async componentDidMount() {
    console.log("child component did mount");
    // API Call
    const data = await fetch("https://api.github.com/users/arshdeep30");
    const response = await data.json();
    this.setState({
      userInfo: response,
    });
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    // means whenever the component will unmount (means it disappear from the webpage, wheter we move to some other component)
    console.log("COmponent will unmount");
  }
  render() {
    console.log("child render");
    const { name } = this.props;
    return (
      <div className="max-w-[50%] p-5 shadow-lg my-4 mx-auto rounded-2xl">
        <h2>Name: {this.state.userInfo.login}</h2>
        <img
          src={this.state.userInfo.avatar_url}
          width={40}
          height={40}
          alt="img"
        />
        <h3>Location: {this.state.userInfo.location}</h3>
        <h4>Email: abc@email.com</h4>
      </div>
    );
  }
}

/***
 *
 *
 * ------------ MOUNTING PHASE ---------------
 *
 * Constructor (dummy)
 * Render  (dummy)
 *        <HTML Updated with dummy data/>
 *
 * ComponentDidMount
 *          <API Call />
 *          <this.setState> -> state variable is updated
 *
 * --------------- UPDATING PHASE (Because of setstate (setstate, prop, forceupdate()))
 *
 *        Render (API Data)
 *        <HTML updated with New API data />
 *        componentDidUpdate
 *
 *
 * */

export default UserClass;
