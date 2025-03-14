export const login = async (username: string, password: string) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password, expiresInMins: 3600 }),
  });
  const data = (await response.json()) as Api.User;
  localStorage.setItem("token", data.accessToken);
  localStorage.setItem("user", JSON.stringify(data));
  return data;
};
