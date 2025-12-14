import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import Reviews from "../components/Reviews";
import "../css/home.css";

export default function Home() {
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    const q = encodeURIComponent(query);

    Promise.all([
      fetch(`http://127.0.0.1:5000/api/categories?q=${q}`, {
        signal: controller.signal
      }).then(res => res.json()),

      fetch(`http://127.0.0.1:5000/api/reviews?q=${q}`, {
        signal: controller.signal
      }).then(res => res.json())
    ])
      .then(([catRes, revRes]) => {
        setCategories(catRes.results || []);
        setReviews(revRes.results || []);
      })
      .catch(() => {})
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [query]);

  return (
    <div className="home-body">
      <h1 className="main-title">Find Trustworthy Companies</h1>
      <p className="sub-title">Read reviews from real customers</p>

      <SearchBar value={query} onChange={setQuery} />

      {loading && <p>Loading...</p>}

      <Categories categories={categories} />
      <Reviews reviews={reviews} />
    </div>
  );
}
