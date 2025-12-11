import "../css/home.css";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-container">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-input"
        placeholder="Search for a company..."
      />
      {/* <button className="search-btn">🔍</button> */}
    </div>
  );
}
