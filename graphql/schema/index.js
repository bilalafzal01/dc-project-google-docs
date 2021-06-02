const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type User {
        _id: ID!
        name: String!
        email: String!
        password: String
        createdDocs: [Document!]
        editingDocs: [Document!]
    }

    type Document {
        _id: ID!
        title: String!
        data: String!
        mode: String!
        creator: User!
        editors: [User!]
        lastEditedBy: User!
        createdAt: String!
        updatedAt: String!
    }

    type AuthData {
        userId: ID!
        token: String!
        tokenExpiration: Int!
      }
    
    input UserInput {
        name: String!
        email: String!
        password: String!
    }

    type RootQuery {
        publicDocuments: [Document!]
        user: User
        login(email: String!, password: String!): AuthData
    }

    type RootMutation {
        signup(userInput: UserInput): User
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
