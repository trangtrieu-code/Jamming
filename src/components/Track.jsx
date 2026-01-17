export default function Track({ track, onAdd, buttonLabel = '+' }) {
  return (
    <div className="d-flex align-items-center p-2 rounded track-item" style={{cursor: 'pointer'}}>
      {/* Track Info */}
      <div className="flex-grow-1 me-3" style={{minWidth: 0}}>
        <div className="text-white fw-medium text-truncate track-name">
          {track.name}
        </div>
        <div className="text-secondary small text-truncate">
          {track.artist}
        </div>
      </div>

      {/* Duration and Button Container - Right Aligned */}
      <div className="d-flex align-items-center gap-2">
        {/* Duration */}
        <div className="text-secondary small" style={{width: '50px', textAlign: 'right'}}>
          {track.duration}
        </div>

        {/* Button */}
        <button
          className="btn text-white px-3 py-2 rounded-circle track-button"
          style={{
            fontSize: '1.5rem',
            fontWeight: '300',
            backgroundColor: 'transparent',
            border: 'none'
          }}
          onClick={() => onAdd && onAdd(track)}
          aria-label={buttonLabel === '−' ? `Remove ${track.name} from playlist` : `Add ${track.name} to playlist`}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}
