const fetch = require("node-fetch");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const graphql = require("graphql-anywhere").default;
const gql = require("graphql-tag");

const app = express();
var port = process.env.PORT || 2345;

app.use(cors());
app.use(bodyParser.json());


app.get("/", (req, res) => {
  console.log("empika mre"); // hahaha
  const msg = {
    hello: "Hello World"
  };
  res.send(msg);
});

// getKinos and parse request variables
app.get("/getKinos", (req, res) => {
  const { date, data } = req.query;
  const fields = gql`${data}`;
  const resolver = (fieldName, root) => root[fieldName];
  
  // const apiUrl = `https://api.opap.gr/draws/v3.0/1100/draw-date/${date}/${date}?page=${page}`;
  const apiUrl = `https://applications.opap.gr/DrawsRestServices/kino/drawDate/${date}.json`;
  
  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {

      const result = graphql(
        resolver,
        fields,
        data
      );

      res.send({ result });
    })
    .catch(err => {
      // res.redirect('/error');
      console.log("error:", err);
    });
  // const msg = {
  //   'hello': 'Hello World',
  // };
  // res.send(msg);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
