import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";

import typeDefs from "./schema";
import mocks from "./schema/mocks";

async function startApolloServer() {
  const server = new ApolloServer({
    schema: addMocksToSchema({
      schema: makeExecutableSchema({ typeDefs }),
      mocks
    })
  });
  return await startStandaloneServer(server);
}

startApolloServer().then(({ url }) => {
  console.log(`
    🚀 Server is running!
    🔗 GraphQL Playground available at: ${url}
  `);
});
