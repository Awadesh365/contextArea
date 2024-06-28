import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [userName, setUserName] = useState("");
  const [passsword, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, passsword });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />{" "}
      <input
        value={passsword}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="text"
        placeholder="passsword"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
