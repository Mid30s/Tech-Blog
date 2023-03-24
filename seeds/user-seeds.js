const { User } = require("../models");

const userData = [
  {
    name: "John Doe",
    email: "johndoe@example.com",
    password: "password1",
  },
  {
    name: "Jane Smith",
    email: "janesmith@example.com",
    password: "password2",
  },
  {
    name: "Bob Johnson",
    email: "bobjohnson@example.com",
    password: "password3",
  },
  {
    name: "Sarah Lee",
    email: "sarahlee@example.com",
    password: "password4",
  },
  {
    name: "Michael Kim",
    email: "michaelkim@example.com",
    password: "password5",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
