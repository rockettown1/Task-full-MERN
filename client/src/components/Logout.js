import React, { useContext } from "react";
import { authHandler } from "../utils/authenticate";
import { AuthContext } from "../global/AuthContext";
import { TasksContext } from "../global/TasksContext";
import { LogoutButton, LogoutText } from "../styles/";

export default function Logout() {
  const [, setisAuthenticated] = useContext(AuthContext);
  const { getTasks } = useContext(TasksContext);

  const logOutHandler = async () => {
    console.log("logging out");

    const response = await fetch("https://blooming-harbor-18687.herokuapp.com/users/logout", {
      method: "GET",
      headers: {
        "content-type": "application/json"
      },
      credentials: "include"
    });

    const data = await response.json();
    console.log(data.message);
    authHandler(setisAuthenticated);
    getTasks([]);
  };

  return (
    <LogoutButton>
      <LogoutText onClick={logOutHandler}>Logout</LogoutText>
    </LogoutButton>
  );
}
