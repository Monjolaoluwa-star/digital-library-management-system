const USERS_KEY = "readsphereUsers";
const CURRENT_USER_KEY = "readsphereCurrentUser";


export const getUsers = () => {
  const users = localStorage.getItem(USERS_KEY);

  return users ? JSON.parse(users) : [];
};


export const signupUser = (name, email, password) => {
  const users = getUsers();

  const existingUser = users.find(
    (user) =>
      user.email.toLowerCase() ===
      email.toLowerCase()
  );

  if (existingUser) {
    throw new Error(
      "An account with this email already exists."
    );
  }

  const newUser = {
    id: Date.now(),
    name,
    email: email.toLowerCase(),
    password,
  };

  localStorage.setItem(
    USERS_KEY,
    JSON.stringify([
      ...users,
      newUser,
    ])
  );

  return newUser;
};


export const loginUser = (email, password) => {
  const users = getUsers();

  const user = users.find(
    (item) =>
      item.email === email.toLowerCase() &&
      item.password === password
  );

  if (!user) {
    throw new Error(
      "Invalid email or password."
    );
  }

  const loggedInUser = {
    id: user.id,
    name: user.name,
    email: user.email,
  };

  localStorage.setItem(
    CURRENT_USER_KEY,
    JSON.stringify(loggedInUser)
  );

  return loggedInUser;
};


export const logoutUser = () => {
  localStorage.removeItem(
    CURRENT_USER_KEY
  );
};


export const getCurrentUser = () => {
  const user =
    localStorage.getItem(
      CURRENT_USER_KEY
    );

  return user
    ? JSON.parse(user)
    : null;
};


export const resetPassword = (email) => {
  const users = getUsers();

  const userExists = users.some(
    (user) =>
      user.email.toLowerCase() ===
      email.toLowerCase()
  );

  if (!userExists) {
    throw new Error(
      "No account was found with this email."
    );
  }

  return true;
};