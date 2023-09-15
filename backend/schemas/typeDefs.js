const typeDefs = `
  type Group {
    _id: ID
    name: String
    items: [Item]
  }
  type Item {
    _id: ID
    name: String
    group: Group
  }
  type Query {
    groups: [Group]
    group(_id: ID!): Group
    items: [Item]
    item(_id: ID!): Item
  }
  type Mutation {
    addGroup(name: String!): Group
    updateGroup(_id: ID!, name: String!): Group
    deleteGroup(_id: ID!): Group
    addItem(name: String!): Item
    updateItem(_id: ID!, name: String!): Item
    deleteItem(_id: ID!): Item
    addItemToGroup(groupId: ID!, itemId: ID!): Group
    removeItemFromGroup(groupId: ID!, itemId: ID!): Group
  }
`;

// const typeDefs = `
//   type User {
//     id: ID!
//     username: String!
//     email: String!
//     favoriteStocks: [Stock]!
//   }

//   type Stock {
//     id: ID!
//     symbol: String!
//     name: String!
//     exchange: String!
//     mic_code: String!
//     currency: String!
//     datetime: String!
//     timestamp: Int
//     open: String!
//     high: String!
//     low: String!
//     close: String!
//     volume: String!
//     previous_close: String!
//     change: String!
//     percent_change: String!
//     average_volume: String!
//     is_market_open: Boolean
//     fifty_two_week: FiftyTwoWeek
//   }
  
//   type FiftyTwoWeek {
//     low: String
//     high: String
//     low_change: String
//     high_change: String
//     low_change_percent: String
//     high_change_percent: String
//     range: String
//   }

//   type Auth {
//     token: ID!
//     user: User
//   }

//   type Query {
//     users: [User]
//     user: User
//     stocks: [Stock]
//     stock(symbol: String!): Stock
//     randomStock: Stock
//     stockz(symbol: String!): Stock
//   }

//   type Mutation {
//     addUser(username: String!, email: String!, password: String!): Auth
//     login(email: String!, password: String!): Auth
//     addFavoriteStock(stockId: String!): User
//     removeFavoriteStock(stockId: String!): User
//     updateStock(symbol: String!): Stock
//   }
// `;

module.exports = typeDefs;
