import type { CodegenConfig } from "@graphql-codegen/cli";

const configuration: CodegenConfig = {
  schema: "./src/schema/schema.graphql",
  generates: {
    "./src/types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "./index#APIContext",
        mappers: {
          Track: "./datasources/TrackAPI/models#TrackModel"
        }
      }
    }
  }
};

export default configuration;