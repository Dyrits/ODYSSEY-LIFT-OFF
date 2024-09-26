import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";

import typeDefs from "./schema";
import resolvers from "./resolvers";
import TrackAPI from "./datasources/TrackAPI";

export interface APIContext {
  dataSources: {
    trackAPI: TrackAPI;
  };
}

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  const configuration = {
    context:async () => {
      const { cache } = server;
      return {
        dataSources: {
          trackAPI: new TrackAPI({ cache })
        }
      }
    }
  };
  return await startStandaloneServer<APIContext>(server, configuration);
}

startApolloServer().then(({ url }) => {
  console.log(`
    🚀 Server is running!
    🔗 GraphQL Playground available at: ${url}
  `);
});
