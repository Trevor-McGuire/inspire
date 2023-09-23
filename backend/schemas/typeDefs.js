const typeDefs = `
  type Group {
    _id: ID!
    name: String!
    items: [Item!]!
  }
  type Item {
    _id: ID!
    name: String!
    group: Group!
  }
  type Query {
    readGroups(last: Int): [Group!]!
    readGroup(_id: ID!): Group!

    readItems(list: Int): [Item!]!
    readItem(_id: ID!): Item!
  }
  type Mutation {
    createGroup(name: String!): Group!
    updateGroup(_id: ID!, name: String!): Group!
    deleteGroup(_id: ID!): Group

    createItem(name: String!, groupId: ID!): Item!
    updateItem(_id: ID!, name: String!): Item!
    deleteItem(_id: ID!): Item!
  }
  type subscription {
    newGroup: Group!
    updatedGroup: Group!
    deletedGroup: Group!

    newItem: Item!
    updatedItem: Item!
    deletedItem: Item!
  }
`;

module.exports = typeDefs;
