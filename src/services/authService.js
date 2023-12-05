const BASE_URL = "https://one00x-react-backend.onrender.com";

export const userLogin = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Invalid credentials");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log("Error", e);
  }
};
