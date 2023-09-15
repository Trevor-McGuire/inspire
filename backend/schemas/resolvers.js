const { Group, Item } = require('../models');
// const { signToken, AuthenticationError } = require('../utils/auth');
require('dotenv').config();

const resolvers = {
  Query: {
    groups: async (parent, args, context) => {
      return await Group.find();
    },
    group: async (parent, args, context) => {
      return await Group.findOne({ _id: args._id }).populate('items');
    },
    items: async (parent, args, context) => {
      return await Item.find();
    },
    item: async (parent, args, context) => {
      return await Item.findOne({ _id: args._id });
    },

      

      // throw AuthenticationError;
    

    // users: async (parent, args, context) => {
    //   // Find and return all users from the database
    //   return await User.find();
    // },
    // user: async (parent, args, context) => {
    //   console.log(context)
    //   // Find and return a single user by ID
    //   //return await User.findById(args.id);

    //   if (context.user) {
    //     return User.findOne({ _id: context.user._id }).populate('favoriteStocks');
    //   }
    //   throw AuthenticationError;
    // },
    // stocks: async (parent, args, context) => {
    //   // Find and return all stocks from the database
    //   return await Stock.find();
    // },
    // stock: async (parent, args, context) => {
    //   // Find and return a single stock by symbol
    //   return await Stock.findOne({ symbol: args.symbol });
    // },
    // // borrowed help from https://gist.github.com/BinaryMuse/3453567
    // randomStock: async (parent, args, context) => {
    //   // Find and return a single stock by symbol
    //   if (context.user) {
    //     const count = await Stock.count().exec();
    //     console.log(`# of stocks = ${count}`)
        
    //     var rand = Math.floor(Math.random() * count);
    //     return Stock.findOne().skip(rand);
    //   }
    //   throw AuthenticationError;
    // },
  },
  Mutation: {
    addGroup: async (parent, args, context) => {
      return await Group.create(args);
    },
    updateGroup: async (parent, args, context) => {
      return await Group.findOneAndUpdate(
        { _id: args._id },
        { $set: { name: args.name } },
        { new: true }
      )
    },
    deleteGroup: async (parent, args, context) => {
      return await Group.findOneAndDelete(
        { _id: args._id }
      )
    },

    addItem: async (parent, args, context) => {
      return await Item.create(args);
    },
    updateItem: async (parent, args, context) => {
      return await Item.findOneAndUpdate(
        { _id: args._id },
        { $set: { name: args.name } },
        { new: true }
      )
    },
    deleteItem: async (parent, args, context) => {
      return await Item.findOneAndDelete(
        { _id: args._id }
      )
    },

    addItemToGroup: async (parent, args, context) => {
      return await Group.findOneAndUpdate(
        { _id: args.groupId },
        { $addToSet: { items: args.itemId } },
        { new: true }
      )
    },
    removeItemFromGroup: async (parent, args, context) => {
      return await Group.findOneAndUpdate(
        { _id: args.groupId },
        { $pull: { items: args.itemId } },
        { new: true }
      )
    },

    // addUser: async (parent, { username, email, password }, context) => {
    //   // Create a new user and save it to the database
    //   const user = await User.create({ username, email, password });
    //   const token = signToken(user);
    //   return { token, user };
    // },
    // login: async (parent, { email, password }) => {
    //   const user = await User.findOne({ email });

    //   if (!user) {
    //     throw AuthenticationError;
    //   }

    //   const correctPw = await user.isCorrectPassword(password);

    //   if (!correctPw) {
    //     throw AuthenticationError;
    //   }

    //   const token = signToken(user);

    //   return { token, user };
    // },
    // // will use context user's id to find one user and then add a stock id to the favorite set
    // addFavoriteStock: async (parent, { stockId }, context) => {
    //   console.log(`trying to add ${stockId} to ${context.user.username}`);
    //   if (context.user) {
    //     const stock = await Stock.findOne({ _id: stockId });
    //     const user = await User.findOneAndUpdate(
    //       {_id: context.user._id},
    //       { $addToSet: { favoriteStocks: stock._id } }
    //     );
    //       console.log(`updated ${user.username} and added ${stockId}`);
    //     return user;
    //   }
    //   throw AuthenticationError;
    // },
    // // will use context user's id to find one user and then add a stock id to the favorite set
    // removeFavoriteStock: async (parent, { stockId }, context) => {
    //   if (context.user) {
    //     const user = await User.findOneAndUpdate(
    //       {_id: context.user._id},
    //       { $pull: { favoriteStocks: stockId } }
    //     );
    //     return user;
    //   }
    //   throw AuthenticationError;
    // },
    // updateStock: async (parent, args, context) => {
    //   if (context.user) {
    //     const apiKey = process.env.API_KEY;
    //     console.log(apiKey);
    //     const fetch = (await import('node-fetch')).default;
    //     const response = await fetch(`https://api.twelvedata.com/quote?symbol=${args.symbol}&apikey=${apiKey}`);
    //     const json = await response.json();
    //     console.log(json)
    //     return await Stock.findOneAndUpdate({ symbol: args.symbol }, json, {upsert: true, new: true, setDefaultsOnInsert: true});
    //   }
    //   throw AuthenticationError;
    // },
  },
};

module.exports = resolvers;
