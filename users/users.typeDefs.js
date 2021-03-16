import { gql } from "apollo-server";

export default gql`
  type User {
    id: Int!
    name: String!
    age: Int!
    gender: String!
  }
  type Query {
    me: User!
  }
`;
