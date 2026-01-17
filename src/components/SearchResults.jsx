import Tracklist from './Tracklist.jsx';

export default function SearchResults() {
  const sampleTracks = [
    {
      id: 1,
      name: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      duration: "3:20",
    },
    {
      id: 2,
      name: "Watermelon Sugar",
      artist: "Harry Styles",
      album: "Fine Line",
      duration: "2:54",
    },
    {
      id: 3,
      name: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      duration: "3:23",
    },
    {
      id: 4,
      name: "Good 4 U",
      artist: "Olivia Rodrigo",
      album: "SOUR",
      duration: "2:58",
    },
    {
      id: 5,
      name: "Stay",
      artist: "The Kid LAROI & Justin Bieber",
      album: "F*CK LOVE 3: OVER YOU",
      duration: "2:21",
    }
  ];

  const handleAddTrack = () => {
    // add track logic here
  };

  return (
    <div className="mt-4">
      <h2 className="h2 fw-bold text-white mb-4">Search Results</h2>
      <Tracklist 
        tracks={sampleTracks} 
        onAdd={handleAddTrack}
        buttonLabel="+"
      />
    </div>
  );
}
