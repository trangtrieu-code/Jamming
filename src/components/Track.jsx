export default function Track({ track, onAdd, buttonLabel = '+' }) {
  return (
    <div className="d-flex align-items-center gap-3 p-2 rounded track-item" style={{cursor: 'pointer'}}>
      {/* Track Info */}
      <div className="grow" style={{minWidth: 0}}>
        <div className="text-white fw-medium text-truncate track-name">
          {track.name}
        </div>
        <div className="text-secondary small text-truncate">
          {track.artist}
        </div>
      </div>

      {/* Duration */}
      <div className="text-secondary small text-end" style={{width: '48px'}}>
        {track.duration}
      </div>

      {/* Button */}
      <button
        className={`btn text-white px-3 py-2 rounded-circle track-button`}
        style={{
          fontSize: '1.5rem',
          fontWeight: '300',
          backgroundColor: 'transparent'
        }}
        onClick={() => onAdd && onAdd(track)}
        aria-label={buttonLabel === '−' ? `Remove ${track.name} from playlist` : `Add ${track.name} to playlist`}
      >
        {buttonLabel}
      </button>
    </div>
  );
}
