// https://www.apollographql.com/docs/apollo-server/essentials/server.html
// https://www.reddit.com/r/graphql/comments/8kwldy/help_querying_data_from_a_3rd_party_api_with/


import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

import StarWarsAPI from './datasources/StarWarsAPI';

// http://api.openweathermap.org/data/2.5/forecast?id=6167865&APPID=9104e8c3dfac703a357aa39dcd429121
const port = process.env.PORT || 2000;

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Person {
    name: String
    films: [Film]
  } 
  type Film {
    title: String
  }
  type Query {
    people: [Person]
  }
`;
 
// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    people: (parent, args, context) => {
      return context.dataSources.starWars.getPeople();
    }
  },
  Person: {
    films: async (parent, args, context) => {
      return Promise.all(
        parent.films
          .map((url) => parseSwapiURL(url).id)
          .map((id) => context.dataSources.starWars.getFilm(id))
      );
    }
  }
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      starWars: new StarWarsAPI(),
    };
  },
});
 
const app = express();
server.applyMiddleware({ app, path: '/' });
 
app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
);

