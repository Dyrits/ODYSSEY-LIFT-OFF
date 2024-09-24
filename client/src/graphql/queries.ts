import { gql } from "@apollo/client";

export const TRACKS = gql`
  query GetTracks {
    tracks {
      id
      title
      thumbnail
      author {
        name
        photo
      }
      length
      modulesCount
    }
  }
`;
