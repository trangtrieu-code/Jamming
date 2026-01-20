import { useState } from 'react';
import SearchBar from './SearchBar.jsx';
import SearchResults from './SearchResults.jsx';
import Playlist from './Playlist.jsx';
import { searchTracks } from '../utils/utils.js';

function App() {
  // Add states
  const [ search, setSearch] = useState('');
  const [ searchResult, setSearchResult ] = useState([]);
  const [ playlistName, setPlaylistName ] = useState('New Playlist');
  const [ playlist, setPlaylist ] = useState([]);

  // Create a function to handle the search
  const handleSearch = async () => {
    const tracks = await searchTracks(search);
    setSearchResult(tracks);
  }

  // Create a function to handle the add track
  

  // Create a function to handle the remove track


  return (
    <div className="min-vh-100 bg-dark text-white p-5" style={{background: 'linear-gradient(to bottom, #1e1b4b, #581c87, #1e293b)'}}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mb-4">
            <SearchBar search={search} setSearch={setSearch} onSearch={handleSearch} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-4">
            <SearchResults tracks={searchResult} />
          </div>
          <div className="col-lg-6 mb-4">
            <Playlist />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
