import { gql } from "@apollo/client";

export const CREATE_GROUP = gql`
  mutation Mutation($name: String!) {
    createGroup(name: $name) {
      _id
      name
    }
  }
`;

export const UPDATE_GROUP = gql`
  mutation Mutation($_id: ID!, $name: String!) {
    updateGroup(_id: $_id, name: $name) {
      _id
      name
    }
  }
`;

export const DELETE_GROUP = gql`
  mutation Mutation($_id: ID!) {
    deleteGroup(_id: $_id) {
      _id
      name
    }
  }
`;

export const CREATE_ITEM = gql`
  mutation Mutation($name: String!, $groupId: ID!) {
    createItem(name: $name, groupId: $groupId) {
      _id
      name
      group {
        _id
        name
      }
    }
  }
`;

export const UPDATE_ITEM = gql`
  mutation Mutation($_id: ID!, $name: String!) {
    updateItem(_id: $_id, name: $name) {
      _id
      name
    }
  }
`;

export const DELETE_ITEM = gql`
  mutation Mutation($_id: ID!) {
    deleteItem(_id: $_id) {
      _id
      name
    }
  }
`;
