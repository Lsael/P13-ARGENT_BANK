export const postLogin = async (datas) => {
  const response = await fetch(`${process.env.REACT_APP_API_PATH}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datas),
  });

  const result = await response.json();
  return result;
};
