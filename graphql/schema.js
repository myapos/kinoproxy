// attempt 1, using API instead of GraphQL schema language
const { 
    GraphQLObjectType, 
    GraphQLList,
    GraphQLSchema,
} = require('graphql');

const DrawType = new GraphQLObjectType({
    name: 'DrawType',
    fields: () => ({
        results: { type: GraphQLList }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        draw: {
            type: DrawType
        }
    }
})
module.exports = new GraphQLSchema({
    query: RootQuery,
});