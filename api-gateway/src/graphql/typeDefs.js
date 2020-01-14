const { gql } = require("apollo-server")

module.exports = gql`
    type Listing {
        description: String!
        id: ID!
        title: String!
    }
    type User {
        email: String!
        id: ID!
    }

    type Mutation {
        createUser(email: String!, password: String!): User!
    }
    type Query {
        listings: [Listing!]!
    }
`
