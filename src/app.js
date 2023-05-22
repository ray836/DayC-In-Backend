const express = require('express');
const app = express();

const aws = require('aws-sdk');

const db = new aws.DynamoDB.DocumentClient({region: 'us-west-2'});

function createUser() {
	const params = {
		TableName: "CareProvider",
		Item: {
			"id": "test123",
			"name": "Little Miners",
			"Owner": "Jessica Peterson",
			"Type": "Child Care (0-10)"
		}
	}

	return db.put(params).promise();
}

app.get("/", (req, res) => {
	res.send("Hello World!");
	// res.sendStatus(500);
});

app.get("/test", (req, res) => {
	res.send("This is Test");
});

app.post("/cool", async (req, res) => {
	await createUser();
	res.send(`this is post ${req.body}`)
})

const port = 8080;
app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});


module.exports = app;