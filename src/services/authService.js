const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const loginUser = async (email, password) => {
  await delay(1000);
  console.log("API login simulée:", email, password);
  return { success: true, token: "fake-jwt-token" };
};

export const registerUser = async (name, email, password) => {
  await delay(1000);
  console.log("API register simulée:", name, email, password);
  return { success: true };
};

export const forgotPassword = async (email) => {
  await delay(1000);
  console.log("API forgot password simulée:", email);
  return { success: true };
};

export const resetPassword = async (password) => {
  await delay(1000);
  console.log("API reset password simulée:", password);
  return { success: true };
};