// // server.js
// const express = require("express");

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware to parse JSON
// app.use(express.json());

// // Basic route
// app.get("/", (req, res) => {
//   res.send("Hello from Express 🚀");
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`✅ Server running at http://localhost:${PORT}`);
// });
// app.js
// const express = require('express');
// const app = express();

// // Custom middleware
// app.use((req, res, next) => {
//   console.log(`${req.method}`);
//   console.log(`${req.url}`);
//   next(); // move to the next middleware or route handler
// });

// // Sample route
// app.get('/', (req, res) => {
//   res.send('Hello from Express!');
// });

// // Start server
// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });
// server.js
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.post('/user', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).send('Name required');
  res.status(201).send({ message: `User ${name} created` });
});

module.exports = app; // <-- export app, not listen()
