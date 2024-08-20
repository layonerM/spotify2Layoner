// auth.js

export const setSession = (user) => {
  sessionStorage.setItem("user", JSON.stringify(user));
};

export const getSession = () => {
  const user = sessionStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const removeSession = () => {
  sessionStorage.removeItem("user");
};
