import Track from './Track.jsx';

export default function Tracklist({ tracks, onAdd, buttonLabel = '+' }) {
  return (
    <div>
      {tracks.map((track) => (
        <Track
          key={track.id}
          track={track}
          onAdd={onAdd}
          buttonLabel={buttonLabel}
        />
      ))}
    </div>
  );
}
