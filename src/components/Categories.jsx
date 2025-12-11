import "../css/categories.css";

export default function Categories({ categories }) {
  return (
    <div className="category-section">
      <h2>Popular Categories</h2>

      <div className="category-list">
        {categories.length === 0 ? (
          <p>No category found…</p>
        ) : (
          categories.map((item, index) => (
            <div className="category-card" key={index}>
              <div className="cat-icon">{item.icon}</div>
              <p>{item.name}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
