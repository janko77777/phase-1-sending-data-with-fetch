let submitData = {
  name: "Steven",
  email: "steven.jankowski@gmail.com",
};

const configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(submitData),
};

function submitData(name, email) {
  fetch("http://localhost:3000/users", configurationObject);
}
