import { CodegenConfig } from "@graphql-codegen/cli";

const configuration: CodegenConfig = {
  schema: "http://localhost:4000",
  documents: "./src/graphql/queries.ts",
  generates: {
    "./src/graphql/types/": {
      preset: "client"
    }
  }
};

export default configuration;
