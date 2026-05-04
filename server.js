const express = require("express");
const app = express();


app.use(express.json());
app.use(express.static("public"));


app.post("/chat", (req, res) => {

    const msg = req.body.message.toLowerCase();

    let reply = "🤖 Try checking restaurants above 👆";

    if (msg.includes("biryani"))
        reply = "🔥 Try Paradise Biryani!";
    else if (msg.includes("pizza"))
        reply = "🍕 Domino's & Pizza Hut are great!";
    else if (msg.includes("burger"))
        reply = "🍔 Try KFC or Burger King!";
    else if (msg.includes("veg"))
        reply = "🥗 South Indian Tiffins is best!";
    else if (msg.includes("hello") || msg.includes("hi"))
        reply = "👋 Hello! What would you like to eat?";

    res.json({ reply });
});


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// 🔥 START SERVER
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});