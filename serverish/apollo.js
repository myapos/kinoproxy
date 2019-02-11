// https://www.apollographql.com/docs/apollo-server/essentials/server.html
// https://www.reddit.com/r/graphql/comments/8kwldy/help_querying_data_from_a_3rd_party_api_with/


import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';


const port = process.env.PORT || 2000;

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;
 
// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};
 
const server = new ApolloServer({ typeDefs, resolvers });
 
const app = express();
server.applyMiddleware({ app });
 
app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
);

