import React from "react";
import { useQuery } from "@apollo/client";
import { Layout } from "../components";
import TrackCard from "../containers/track-card";
import { QueryResult } from "../components";

import { TRACKS } from "../graphql/queries";
import { Track } from "../graphql/types/graphql";

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  return (
    <Layout grid>
      <QueryResult loading={loading} error={error} data={data}>
        {data?.tracks?.map((track: Track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
