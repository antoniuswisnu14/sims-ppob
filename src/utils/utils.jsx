import Cookies from "js-cookie";
import axios from "axios";

export function storeSessionToken(apiToken) {
  try {
    const expirationHours = 12;
    Cookies.set("session_token", apiToken, {
      expires: expirationHours / 24,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Lax",
    });

    console.log("Session token stored successfully.");
  } catch (error) {
    console.error("Error storing session token:", error);
    throw new Error("Failed to store session token");
  }
}

export function getSessionToken() {
  try {
    const token = Cookies.get("session_token");

    if (!token) {
      throw error("Session token not found");
    }

    return token;
  } catch (error) {
    console.error("Error retrieving session token:", error);
    return null;
  }
}

export async function fetchGetData(url) {
  const token = getSessionToken();
  const response = await axios.get(
    `https://take-home-test-api.nutech-integrasi.com/${url}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
}
