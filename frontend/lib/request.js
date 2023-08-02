import axios from "axios";

const BASE_URL = "https://localhost:8000";

export const login = async (email, password) => {
  const response = await axios.get(
    `${BASE_URL}/api/login_check`,
    { email, password },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const register = async (name, email, password) => {
  const response = await axios.post(
    `${BASE_URL}/api/register`,
    { email, password, name },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};
