import { useState } from "react";

const User = ({ name }) => {
  const [count, setcount] = useState(0);
  return (
    <div className="user-card">
      <h1>count: {count}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: New Delhi</h3>
      <h4>Email: abc@email.com</h4>
    </div>
  );
};

export default User;
