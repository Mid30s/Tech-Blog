const { User } = require("../models");

const userData = [
  {
    name: "John Doe",
    email: "john@example.com",
    password: "password123",
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    password: "password123",
  },
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
