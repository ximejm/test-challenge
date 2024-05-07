// Imports small array of users
// Pretend it's an API request
const users = require("./data").default;

// Fetches all users
const getUsers = () => {
  return users;
};
function fetchUserData (users) { 
  return new Promise((resolve, reject) => {
    setTimeout(() => { 
      const user = userData[users];
      if (user) {
        resolve(users);

        } else {
          reject(new Error("User not found")); 
        }
      }, 10000); 
    }); 
}
const { fetchUserData } = require('./users.js');

fetchUserData(1)
  .then(user => {
    console.log("User data:", user);
  })
  .catch(error => {
    console.error("Error:", error.message);
  });


// Filters users by specific ID
const getUser = (id) => {
  return users.find((user) => user.id === id);
};

// test
// console.log(getUser(3));

module.exports = { getUsers, getUser };

