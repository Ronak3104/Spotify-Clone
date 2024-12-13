import LoggedInContainer from "../containers/LoggedInContainer";

const focusCardsData = [
  {
    title: "Peaceful Piano",
    description: "Relax and indulge with beautiful piano pieces.",
    imageUrl:
      "https://seeded-session-images.scdn.co/v1/img/track/4bYH9Umn6zEjFhQqVew0bQ/en",
  },
  {
    title: "Deep focus",
    description: "Keep calm and focus with this music.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.3jWkyB0hKYrkdB2TlrVfVQHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    title: "Instumental Study",
    description: "Focus with soft study music in the background.",
    imageUrl:
      "https://i.scdn.co/image/ab67706f00000002fe24d7084be472288cd6ee6c",
  },
  {
    title: "Focus Flow",
    description: "Up tempo instrumental hip hop beats.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.NQHk1BLhPBLnfp0Gco3z6AHaHa?w=209&h=209&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    title: "Beats to think to",
    description: "Focus with deep tachno and tach house.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.eLRIqNzAKEBBsWJa3Ax49QHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
];

const spotifyPlaylistsCardsData = [
  {
    title: `Today’s Top Hits`,
    description: "Spotify’s most popular playlist for current global hits.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.CzhRdg9559FX7py9ufLPygHaHa?w=162&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    title: "RapCaviar",
    description: "Top rap and hip-hop tracks from trending artists.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.K-mTL1vUjV5WKeu6t0YdsgHaHa?w=163&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    title: "Rock This",
    description: "A mix of iconic rock and new releases.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.Gj7VXU8ZtFSieE-JGGyP2QHaHa?w=162&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    title: "Dance Party",
    description: "High-energy tracks for a lively atmosphere.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.EGxysImKgIPpZckgdFHZ6wHaHa?w=209&h=209&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    title: "Country Gold",
    description: "A blend of classic and modern country hits.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.SKCI0ZqbcSYseHt0FzqXdwHaHa?w=209&h=209&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
];

const spotifyIndiaCardsData = [
  {
    title: "Top 50 India",
    description: "The 50 most popular tracks in India right now.",
    imageUrl:
      "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_in_default.jpg",
  },
  {
    title: "Bollywood Top 50",
    description: "Current top Bollywood hits.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.M-0MkfSVffOQg2g4ZZJfhwAAAA?w=173&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    title: "New Hindi Songs 2024",
    description: "Latest Hindi music releases.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.5qBW2rtT9JMYJZ8pUockZQAAAA?w=161&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    title: "Hot Hits India",
    description: "Most-played Indian songs across genres.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.eA0gX2RBHJs_bqwCgwZEgwAAAA?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    title: "Top Bollywood Songs 2024",
    description: "Trending Bollywood chart-toppers.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.NBHJI3wvi54tc8YqKiGjJwAAAA?w=209&h=209&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
];

const Home = () => {
  return (
    <LoggedInContainer currentActiveScreen="loggedInHome">
      <PlaylistView titleText={"Focus"} cardsData={focusCardsData} />
      <PlaylistView
        titleText={"Spotify Playlists"}
        cardsData={spotifyPlaylistsCardsData}
      />
      <PlaylistView
        titleText={"Sound of India"}
        cardsData={spotifyIndiaCardsData}
      />
    </LoggedInContainer>
  );
};

const PlaylistView = ({ titleText, cardsData }) => {
  return (
    <div className="text-white mt-8">
      <div className="text-2xl font-semibold mb-5">{titleText}</div>
      <div className="w-full flex justify-between space-x-4">
        {
          //cardsData will be an array
          cardsData.map((item) => {
            return (
              <Card
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
              />
            );
          })
        }
      </div>
    </div>
  );
};

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-black bg-opacity-40 w-1/5 p-4 rounded-lg">
      <div className="pb-4 pt-2">
        <img className="w-full rounded-md" src={imageUrl} alt="label" />
      </div>
      <div className="text-white font-semibold py-3">{title}</div>
      <div className="text-gray-500 text-sm">{description}</div>
    </div>
  );
};

export default Home;
