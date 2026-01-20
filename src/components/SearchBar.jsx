export default function SearchBar({search, setSearch, onSearch}) {
  return (
    <div className="w-100" style={{maxWidth: '800px'}}>
      <div className="position-relative d-flex align-items-center">
        <i className="bi bi-search position-absolute" style={{left: '12px', color: '#9ca3af', zIndex: 10}}></i>

        <input
          className="form-control rounded-pill ps-5 pe-4 py-3 me-3"
          style={{backgroundColor: 'rgba(255,255,255,0.1)', borderColor: '#374151', color: 'white'}}
          placeholder="What do you want to search for?" 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        
        <button
          className="btn rounded-pill px-4 py-3 fw-semibold text-white"
          style={{backgroundColor: '#4f46e5'}}
          type="button"
          onClick={onSearch}
        >
          Search
        </button> 
      </div>
    </div>
  )
}