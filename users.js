const users = [];

const addUser = ({ id, name, document }) => {
  name = name.trim().toLowerCase();
  document = document.trim().toLowerCase();

  const existingUser = users.find(
    (user) => user.document === document && user.name === name
  );

  if (!name || !document)
    return { error: "Username and document are required." };
  if (existingUser) return { error: "Username is taken." };

  const user = { id, name, document };

  users.push(user);

  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) return users.splice(index, 1)[0];
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInDcoument = (document) =>
  users.filter((user) => user.document === document);

module.exports = { addUser, removeUser, getUser, getUsersInDcoument };
