export const authHandler = async setAuth => {
  const response = await fetch("https://blooming-harbor-18687.herokuapp.com/tasks", {
    method: "GET",
    headers: {
      "content-type": "application/json"
    },
    credentials: "include"
  });
  const data = await response.json();
  if (!data.error) {
    setAuth(true);
  } else {
    setAuth(false);
  }

  return data;
};
