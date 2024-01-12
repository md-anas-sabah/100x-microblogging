// const BASE_URL = "https://one00x-react-backend.onrender.com";
const BASE_URL = "http://localhost:4000";

export const userLogin = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    console.log(response);
    if (!response.ok) {
      throw new Error("Invalid credentials");
    }
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (e) {
    console.log("Error", e);
  }
};
