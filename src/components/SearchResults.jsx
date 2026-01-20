import Tracklist from './Tracklist.jsx';

export default function SearchResults() {

  return (
    <div className="mt-4">
      <h2 className="h2 fw-bold text-white mb-4">Search Results</h2>
      <Tracklist 
        tracks={tracks}
        onAdd={onAdd}
        buttonLabel="+"
      />
    </div>
  );
}
