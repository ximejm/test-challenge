// Imports small array of users
// Pretend it's an API request
const users = require("./data").default;

// Fetches all users
const getUsers = () => {
  return users;
};
function getUsers (users) { 
  return new Promise((resolve, reject) => {
    setTimeout(() => { 
      const user = userData[users];
      if (user) {
        resolve(users);

        } else {
          reject(new Error("User not found")); 
        }
      }, 2000); 
    }); 
}

getUsers(1)
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

getUser(3)
.then (id => { 
  console.log("user id:", id); 
})
.catch(error => { 
  console.error("Error:", error.message);
})

// test
// console.log(getUser(3));

module.exports = { getUsers, getUser };

