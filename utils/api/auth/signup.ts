import config from "../../../config/config";

interface SignupData {
  email: string;
  phone: string;
  password: string;
}

export const signup = async (data: SignupData): Promise<any> => {
  console.log("Data : ", JSON.stringify(data));

  try {
    const response = await fetch(`${config.apiBaseUrl}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to sign up");
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error signing up:", (error as Error).message);
    throw error as Error;
  }
};
