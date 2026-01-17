import SearchBar from './SearchBar.jsx';
import SearchResults from './SearchResults.jsx';
import Playlist from './Playlist.jsx';

function App() {
  return (
    <div className="min-vh-100 bg-dark text-white p-5" style={{background: 'linear-gradient(to bottom, #1e1b4b, #581c87, #1e293b)'}}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mb-4">
            <SearchBar />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-4">
            <SearchResults />
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
