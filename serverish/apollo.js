// https://www.apollographql.com/docs/apollo-server/essentials/server.html
// https://www.reddit.com/r/graphql/comments/8kwldy/help_querying_data_from_a_3rd_party_api_with/
// https://hackernoon.com/using-babel-7-with-node-7e401bc28b04
// https://github.com/apollographql/apollo-server/issues/1217

import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

// import StarWarsAPI from './datasources/StarWarsAPI';
import KinoAPI from './datasources/KinoAPI';

function parseSwapiURL(url) {
  // "https://swapi.co/api/people/1/"
  const parts = url.split('/');
  return {
    protocol: parts[0],
    domain: parts[2],
    model: parts[4],
    id: parts[5],
  };
}
// https://applications.opap.gr/DrawsRestServices/kino/drawDate/2-2-2019.json
// http://api.openweathermap.org/data/2.5/forecast?id=6167865&APPID=9104e8c3dfac703a357aa39dcd429121
const port = process.env.PORT || 2000;

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  
type Draw {
  drawTime: String,
  drawNo: Int,
  results: [Int]
}
  
type Query {
  draws: [Draw]
}

`;
 
// const typeDefs = gql`
  
//   type Query {
//     draws: String
//   }
// `;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    draws: (parent, args, context) => {
      console.log('parent:', parent);
      console.log('args:', args);
      
      return context.dataSources.kinoAPI.getSingleDate();
    }
  },
  // Person: {
  //   films: async (parent, args, context) => {
  //     return Promise.all(
  //       parent.films
  //         .map((url) => parseSwapiURL(url).id)
  //         .map((id) => context.dataSources.starWars.getFilm(id))
  //     );
  //   }
  // }
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      kinoAPI: new KinoAPI(),
    };
  },
});
 
const app = express();
server.applyMiddleware({ app, path: '/' });
 
app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
);

