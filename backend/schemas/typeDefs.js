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
  type Tag {
    _id: ID!
    name: String!
  }

  type Query {
    readGroups(last: Int): [Group!]!
    readGroup(_id: ID!): Group!

    readItems(list: Int): [Item!]!
    readItem(_id: ID!): Item!

    readTags: [Tag!]!
    readTag(_id: ID!): Tag!
  }
  type Mutation {
    createGroup(name: String!): Group!
    updateGroup(_id: ID!, name: String!): Group!
    deleteGroup(_id: ID!): Group

    createItem(name: String!, groupId: ID!): Item!
    updateItem(_id: ID!, name: String!): Item!
    deleteItem(_id: ID!): Item!

    createTag(name: String!): Tag!
    updateTag(_id: ID!, name: String!): Tag!
    deleteTag(_id: ID!): Tag!
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
