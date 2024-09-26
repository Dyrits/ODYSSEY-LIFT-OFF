import { Resolvers } from "../types";

const resolvers: Resolvers = {
  Query: {
    // Return an array of Tracks that will be used to populate the homepage grid of our web client.
    tracks: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracks();
    }
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    }
  }
};

export default resolvers;