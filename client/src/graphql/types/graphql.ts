/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

/** Author of a complete Track or a Module- */
export type Author = {
  __typename?: "Author";
  id?: Maybe<Scalars["ID"]["output"]>;
  /** The author's first and last name- */
  name?: Maybe<Scalars["String"]["output"]>;
  /** URL of the author's profile picture- */
  photo?: Maybe<Scalars["String"]["output"]>;
};

/** Root Query for the GraphQL API- */
export type Query = {
  __typename?: "Query";
  /** Query to get a list of all Tracks- */
  tracks: Array<Track>;
};

/** Group of Modules that teaches about a specific topic- */
export type Track = {
  __typename?: "Track";
  /** The track's main author- */
  author: Author;
  id: Scalars["ID"]["output"];
  /** The track's approximate length to complete, in minutes- */
  length?: Maybe<Scalars["Int"]["output"]>;
  /** The number of modules this track contains- */
  modulesCount?: Maybe<Scalars["Int"]["output"]>;
  /** The track's main illustration to display in track card or track page detail- */
  thumbnail?: Maybe<Scalars["String"]["output"]>;
  /** The track's title- */
  title: Scalars["String"]["output"];
};

export type GetTracksQueryVariables = Exact<{ [key: string]: never }>;

export type GetTracksQuery = {
  __typename?: "Query";
  tracks: Array<{
    __typename?: "Track";
    id: string;
    title: string;
    thumbnail?: string | null;
    length?: number | null;
    modulesCount?: number | null;
    author: {
      __typename?: "Author";
      name?: string | null;
      photo?: string | null;
    };
  }>;
};

export const GetTracksDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetTracks" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "tracks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "thumbnail" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "author" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "photo" } }
                    ]
                  }
                },
                { kind: "Field", name: { kind: "Name", value: "length" } },
                { kind: "Field", name: { kind: "Name", value: "modulesCount" } }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<GetTracksQuery, GetTracksQueryVariables>;
