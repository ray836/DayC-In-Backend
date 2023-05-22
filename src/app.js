const express = require('express');
const app = express();

const aws = require('aws-sdk');
const { randomUUID } = require('crypto');

const db = new aws.DynamoDB.DocumentClient({region: 'us-west-2'});

function createProvider() {
	const params = {
		TableName: "CareProvider",
		Item: {
			"id": randomUUID(),
			"BusinessName": "Little Miners",
			"OwnerFirstName": "Jessica",
			"OwnerLstName": "Peterson",
			"email": "jess@gmail.com",
			"phoneNumber": "8018847446",
			"ageRange": "0-8",
			"City": "West Valley City",
			"Address": "1639 west 3300 south",
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
	await createProvider();
	res.send(`this is post ${req.body}`)
})

const port = 8080;
app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});


module.exports = app;