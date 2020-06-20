const users = [];
function addUser(id, name, room) {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();
  const existingUser = users.find(
    (user) => user.room === room && user.name === name
  );
  if (existingUser) {
    return { error: "Username is taken" };
  }
  const user = { id, name, room };
  users.push(user);
  return user;
}

function getUserInRoom(room) {
  return users.filter((user) => user.room === room);
}

function getUser(id) {
  return users.find((user) => user.id === id);
}
function removeUser(id) {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

module.exports = { addUser, removeUser, getUser, getUserInRoom };
