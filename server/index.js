// Copies the .env keys
require('dotenv').config();

// Setting up express (routing), cors (middleware) and mysql
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

// Creating app
const app = express();

app.use(cors());
app.use(express.json());

// Connecting to DB
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

// Health check of api
app.get('/api/health', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT 1 AS ok');
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
  }
});


// setting port number
const port = process.env.PORT || 3000;
// listening on said port
app.listen(port, () => console.log("Server Running..."))