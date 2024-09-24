export default {
  Query: () => ({
    tracks: () => [...new Array(6)]
  }),
  Track: () => ({
    id: () => "Track#01",
    title: () => "Astro Kitty, Space Explorer",
    author: () => ({
      name: "Grumpy Cat",
      photo: "https://picsum.photos/200/300"
    }),
    thumbnail: () => "https://picsum.photos/200/300",
    length: () => 1024,
    modulesCount: () => 8
  })
};
