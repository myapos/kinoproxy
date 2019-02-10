const fetch = require("node-fetch");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();
var port = process.env.PORT || 2345;
// https://graphql.org/graphql-js/constructing-types/

// https://hackernoon.com/wiring-up-a-graphql-server-with-node-and-express-9d00489da4be

// 3d party API for testing https://jsonplaceholder.typicode.com/posts
const schema = buildSchema(`

type SingleDraw {
  drawTime: String,
  drawNo: Int,
  results: [Int]
}

type Draws {
  draw: [SingleDraw]
}

type Query {
  draws: Draws
}
`);

var fakeData3 = {
  "draws": {
    "draw": [
      {
      "drawTime": "02-02-2019T09:00:00",
      "drawNo": 727066,
      "results": [
        20,
        67,
        31,
        61,
        1,
        4,
        9,
        77,
        41,
        27,
        57,
        70,
        13,
        56,
        37,
        69,
        12,
        30,
        74,
        50
        ]
      },
      {
        "drawTime": "02-02-2019T09:10:00",
        "drawNo": 727068,
        "results": [
          39,
          43,
          45,
          10,
          19,
          78,
          61,
          49,
          57,
          14,
          46,
          71,
          16,
          30,
          79,
          42,
          32,
          60,
          22,
          11
        ]
      },
  ]
  }
}

var root = {
  draws: () => {
    return fakeData3['draws']['draw'];
  },
};

//draws(date: String): Draws
var fakeData = {
  "data": {
    "draws": {
      "draw": [
        {
          "drawTime": "02-02-2019T09:00:00",
          "drawNo": 727066,
          "results": [
            20,
            67,
            31,
            61,
            1,
            4,
            9,
            77,
            41,
            27,
            57,
            70,
            13,
            56,
            37,
            69,
            12,
            30,
            74,
            50
          ]
        },
        {
          "drawTime": "02-02-2019T09:05:00",
          "drawNo": 727067,
          "results": [
            6,
            46,
            5,
            27,
            4,
            39,
            79,
            61,
            24,
            25,
            9,
            60,
            52,
            75,
            67,
            43,
            49,
            8,
            59,
            44
          ]
        },
        {
          "drawTime": "02-02-2019T09:10:00",
          "drawNo": 727068,
          "results": [
            39,
            43,
            45,
            10,
            19,
            78,
            61,
            49,
            57,
            14,
            46,
            71,
            16,
            30,
            79,
            42,
            32,
            60,
            22,
            11
          ]
        },
        {
          "drawTime": "02-02-2019T09:15:00",
          "drawNo": 727069,
          "results": [
            30,
            9,
            12,
            68,
            22,
            69,
            51,
            76,
            62,
            55,
            38,
            25,
            67,
            61,
            6,
            54,
            26,
            20,
            56,
            24
          ]
        },
        {
          "drawTime": "02-02-2019T09:20:00",
          "drawNo": 727070,
          "results": [
            12,
            27,
            41,
            52,
            1,
            74,
            57,
            30,
            18,
            38,
            59,
            51,
            44,
            76,
            68,
            19,
            62,
            3,
            66,
            9
          ]
        },
        {
          "drawTime": "02-02-2019T09:25:00",
          "drawNo": 727071,
          "results": [
            47,
            80,
            17,
            22,
            59,
            14,
            12,
            45,
            57,
            29,
            13,
            65,
            40,
            55,
            26,
            33,
            30,
            67,
            48,
            24
          ]
        },
        {
          "drawTime": "02-02-2019T09:30:00",
          "drawNo": 727072,
          "results": [
            60,
            48,
            76,
            49,
            30,
            44,
            52,
            68,
            9,
            5,
            16,
            10,
            12,
            41,
            55,
            19,
            38,
            1,
            46,
            62
          ]
        },
        {
          "drawTime": "02-02-2019T09:35:00",
          "drawNo": 727073,
          "results": [
            10,
            39,
            27,
            26,
            78,
            29,
            46,
            55,
            22,
            62,
            80,
            64,
            5,
            38,
            33,
            14,
            16,
            56,
            36,
            6
          ]
        },
        {
          "drawTime": "02-02-2019T09:40:00",
          "drawNo": 727074,
          "results": [
            38,
            2,
            77,
            21,
            51,
            8,
            76,
            63,
            9,
            75,
            44,
            60,
            18,
            20,
            15,
            37,
            65,
            49,
            6,
            25
          ]
        },
        {
          "drawTime": "02-02-2019T09:45:00",
          "drawNo": 727075,
          "results": [
            46,
            70,
            80,
            57,
            40,
            12,
            47,
            8,
            77,
            17,
            15,
            30,
            28,
            53,
            24,
            1,
            25,
            65,
            18,
            11
          ]
        },
        {
          "drawTime": "02-02-2019T09:50:00",
          "drawNo": 727076,
          "results": [
            74,
            80,
            52,
            4,
            35,
            78,
            5,
            33,
            9,
            62,
            65,
            30,
            77,
            34,
            39,
            57,
            79,
            64,
            1,
            44
          ]
        },
        {
          "drawTime": "02-02-2019T09:55:00",
          "drawNo": 727077,
          "results": [
            47,
            69,
            63,
            52,
            18,
            25,
            70,
            27,
            12,
            62,
            72,
            13,
            40,
            30,
            49,
            51,
            11,
            31,
            42,
            10
          ]
        },
        {
          "drawTime": "02-02-2019T10:00:00",
          "drawNo": 727078,
          "results": [
            5,
            28,
            8,
            60,
            33,
            66,
            54,
            24,
            74,
            10,
            79,
            72,
            19,
            63,
            39,
            35,
            29,
            59,
            51,
            73
          ]
        },
        {
          "drawTime": "02-02-2019T10:05:00",
          "drawNo": 727079,
          "results": [
            62,
            8,
            5,
            74,
            48,
            70,
            13,
            58,
            17,
            50,
            37,
            65,
            26,
            15,
            64,
            49,
            76,
            61,
            31,
            35
          ]
        },
        {
          "drawTime": "02-02-2019T10:10:00",
          "drawNo": 727080,
          "results": [
            6,
            10,
            31,
            56,
            59,
            24,
            51,
            47,
            25,
            21,
            54,
            66,
            71,
            13,
            75,
            78,
            40,
            65,
            44,
            8
          ]
        },
        {
          "drawTime": "02-02-2019T10:15:00",
          "drawNo": 727081,
          "results": [
            45,
            50,
            7,
            64,
            47,
            40,
            77,
            28,
            16,
            41,
            55,
            35,
            32,
            23,
            73,
            52,
            33,
            53,
            78,
            36
          ]
        },
        {
          "drawTime": "02-02-2019T10:20:00",
          "drawNo": 727082,
          "results": [
            33,
            36,
            8,
            41,
            17,
            55,
            7,
            45,
            44,
            5,
            42,
            32,
            31,
            53,
            75,
            11,
            30,
            61,
            38,
            22
          ]
        },
        {
          "drawTime": "02-02-2019T10:25:00",
          "drawNo": 727083,
          "results": [
            15,
            6,
            76,
            10,
            50,
            67,
            48,
            73,
            36,
            56,
            38,
            20,
            77,
            55,
            31,
            47,
            45,
            12,
            22,
            23
          ]
        },
        {
          "drawTime": "02-02-2019T10:30:00",
          "drawNo": 727084,
          "results": [
            50,
            65,
            66,
            37,
            77,
            21,
            8,
            12,
            2,
            42,
            31,
            62,
            60,
            76,
            47,
            17,
            55,
            3,
            39,
            30
          ]
        },
        {
          "drawTime": "02-02-2019T10:35:00",
          "drawNo": 727085,
          "results": [
            10,
            15,
            2,
            46,
            11,
            70,
            43,
            16,
            65,
            52,
            49,
            12,
            42,
            61,
            51,
            39,
            1,
            58,
            79,
            54
          ]
        },
        {
          "drawTime": "02-02-2019T23:35:00",
          "drawNo": 727241,
          "results": [
            49,
            68,
            28,
            48,
            78,
            5,
            40,
            44,
            36,
            52,
            61,
            39,
            54,
            75,
            24,
            55,
            32,
            14,
            4,
            25
          ]
        },
        {
          "drawTime": "02-02-2019T23:40:00",
          "drawNo": 727242,
          "results": [
            22,
            64,
            50,
            41,
            62,
            7,
            70,
            61,
            15,
            35,
            20,
            68,
            43,
            57,
            48,
            2,
            38,
            1,
            29,
            46
          ]
        },
        {
          "drawTime": "02-02-2019T23:45:00",
          "drawNo": 727243,
          "results": [
            43,
            31,
            27,
            14,
            9,
            47,
            23,
            13,
            15,
            37,
            66,
            21,
            55,
            52,
            76,
            36,
            12,
            46,
            39,
            38
          ]
        },
        {
          "drawTime": "02-02-2019T23:50:00",
          "drawNo": 727244,
          "results": [
            66,
            62,
            22,
            29,
            51,
            36,
            26,
            24,
            55,
            45,
            9,
            58,
            73,
            28,
            56,
            31,
            63,
            48,
            33,
            19
          ]
        },
        {
          "drawTime": "02-02-2019T23:55:00",
          "drawNo": 727245,
          "results": [
            48,
            62,
            49,
            35,
            65,
            75,
            30,
            1,
            22,
            56,
            67,
            34,
            69,
            20,
            45,
            8,
            78,
            63,
            28,
            25
          ]
        }
      ]
    }
  }
};

// attempt 2 using schema lang
const schema2 = buildSchema(`
 
  type Draw {
    results: [Int]
  }

  type Query {
    draws: Draw
  }
`);

var fakeData2 = {
  '2-2-2018': {
    results: [1,2,3]
  },
  '3-2-2018': {
    results: [2]
  }
};

var root2 = {
  draws: () => {
    return fakeData2;
  },
};

app.use(cors());
app.use(bodyParser.json());

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.get("/", (req, res) => {
  console.log("empika mre"); // hahaha
  const msg = {
    hello: "Hello World"
  };
  res.send(msg);
});

app.use("/getDummyKinos", graphqlHTTP({
  schema: schema2,
  rootValue: root2,
  graphiql: false,
}));

app.use("/getKinosWithDate", (req, res) => {
  const { date } = req.query;
  console.log("2 empika mre", date);

  // const query = `{draws(date: "${date}") { results } }`;
  const query = `{draws }`;
  console.log('query:', query);
  
  const url = `http://localhost:2345/getDummyKinos?query=${query}`; // send request to local server
  
  console.log('url:', url);
  const res__ = fetch(url)
    .then(res => res.json())
    .then(data => { 
      res.send(data);
    });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
