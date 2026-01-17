import Tracklist from './Tracklist.jsx';

export default function Playlist() {
  const playlistTracks = [];

  const handleRemoveTrack = () => {
    // Remove track logic will go here
  };

  return (
    <div className="mt-4">
      {/* Playlist Header */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="New Playlist"
          className="form-control border-0"
          style={{backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', fontSize: '1.5rem', fontWeight: 'bold'}}
        />
      </div>

      {/* Playlist Tracks */}
      {playlistTracks.length === 0 ? (
        <div className="text-center py-5" style={{color: '#9ca3af'}}>
          <p className="h5 mb-2">Your playlist is empty</p>
          <p className="small">Add songs from search results to get started</p>
        </div>
      ) : (
        <Tracklist 
          tracks={playlistTracks} 
          onAdd={handleRemoveTrack}
          buttonLabel="−"
        />
      )}

      {/* Save Button */}
      <div className="mt-4">
        <button
          className="btn w-100 rounded-pill fw-semibold py-3 px-4 text-white"
          style={{backgroundColor: '#4f46e5'}}
          onClick={() => {
            // Save playlist logic will go here
          }}
        >
          Save to Spotify
        </button>
      </div>
    </div>
  );
}
