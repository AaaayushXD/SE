export const verifyToken = async (token: string) => {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = (await response.json()) as Api.User;
  localStorage.setItem("user", JSON.stringify(data));
  return data;
};
