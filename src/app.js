const express = require('express');
const app = express();

app.get("/", (req, res) => {
	res.send("Hello World!");
	// res.sendStatus(500);
});

app.get("/test", (req, res) => {
	res.send("This is Test");
});

app.post("/cool", (req, res) => {
	res.send(`this is post ${req.body}`)
})

const port = 8080;
app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});


module.exports = app;