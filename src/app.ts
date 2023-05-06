import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
  // res.sendStatus(500);
});

app.route('/provider/:id')
	.get((req, res) => {
		res.send(`Getting provider with ID ${req.params.id}`);
	})
	.put((req, res) => {
		res.send(`Updating provider with Id: ${req.params.id}`);
	})
	.delete((req, res) => {
		res.send(`Delete provider with Id: ${req.params.id}`);
	})

app.post('/provider', (req, res) => {
	res.send(`make provider....`)
})



const port = 8080;
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

export default app;