const { Group, Item } = require("../models");
require("dotenv").config();

const resolvers = {
  Query: {

    readGroups: async (parent, args, context) => {
      return await Group.find().populate("items");
    },
    readGroup: async (parent, args, context) => {
      return await Group.findById(args._id).populate("items");
    },

    readItems: async (parent, args, context) => {
      return await Item.find().populate("group");
    },
    readItem: async (parent, args, context) => {
      return await Item.findById(args._id).populate("group");
    },

  },
  Mutation: {

    createGroup: async (parent, args, context) => {
      return await Group.create(args);
    },
    updateGroup: async (parent, args, context) => {
      return await Group.findOneAndUpdate(
        { _id: args._id },
        { $set: { name: args.name } },
        { new: true }
      );
    },
    deleteGroup: async (parent, args, context) => {
      const items = await Item.deleteMany({ group: args._id });
      return await Group.findOneAndDelete({ _id: args._id });
    },

    createItem: async (parent, args, context) => {
      try {
        const group = await Group.findById(args.groupId);
        if (!group) throw new Error("Group not found");
    
        const newItem = await Item.create({
          name: args.name,
          group: group,
        });
    
        group.items.push(newItem._id);
        await group.save();
    
        return newItem; // Apollo Server will handle ID serialization
      } catch (error) {
        throw new Error("Error creating item: " + error.message);
      }
    },
    
    
    updateItem: async (parent, args, context) => {
      return await Item.findOneAndUpdate(
        { _id: args._id },
        { $set: { name: args.name } },
        { new: true }
      );
    },
    deleteItem: async (parent, args, context) => {
      return await Item.findOneAndDelete({ _id: args._id });
    },
    
  },
};

module.exports = resolvers;
