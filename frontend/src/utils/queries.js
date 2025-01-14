import { gql } from "@apollo/client";

export const READ_GROUPS = gql`
  query ReadGroups {
    readGroups {
      _id
      name
      items {
        _id
        name
      }
    }
  }
`;

export const READ_GROUP = gql`
  query Query($_id: ID!) {
    readGroup(_id: $_id) {
      _id
      name
      items {
        _id
        name
      }
    }
  }
`;

export const READ_ITEMS = gql`
  query Query {
    readItems {
      _id
      name
      group {
        _id
        name
      }
    }
  }
`;

export const READ_ITEM = gql`
  query Query($_id: ID!) {
    readItem(_id: $_id) {
      name
      _id
      group {
        _id
        name
      }
    }
  }
`;
