import express from 'express';
import cors from 'cors';

const app = express();
var port = process.env.PORT || 2346;

app.use(cors());

app.get("/", (req, res) => {
  const msg = {
    hello: "Hello World from helloAPI"
  };
  res.send(msg);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
