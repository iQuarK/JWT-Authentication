import axios from "axios";

export const login = async (email, password) => {
  const response = await axios.get(
    "http://localhost:8000/api/login_check",
    { email, password },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const register = (name, email, password) => {};
