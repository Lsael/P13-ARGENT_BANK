export const postLogin = async (datas) => {
  const response = await fetch(`http://localhost:3001/api/v1/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datas),
  });

  const result = await response.json();
  return result;
};
