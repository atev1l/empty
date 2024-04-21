const express = require("express");
const cors = require('cors');

const app = express();

app.use(cors());

app.get("/a", (req, res) => {
    res.send("Server example");
});

// Initialize server
app.listen(8080, () => {
    console.log("Running on port 8080.");
});