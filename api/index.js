const express = require("express");

const app = express();

app.get("/a", (req, res) => {
    res.send("Server example");
});

// Initialize server
app.listen(8080, () => {
    console.log("Running on port 8080.");
});