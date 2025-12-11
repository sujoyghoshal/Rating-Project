import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import Reviews from "../components/Reviews";
import data from "../data/dummydata.json";
import "../css/home.css";

export default function Home() {
  const [query, setQuery] = useState("");

  // FILTER CATEGORY BY SEARCH
  const filteredCategories = data.categories.filter((cat) =>
    cat.name.toLowerCase().includes(query.toLowerCase())
  );

  // FILTER REVIEWS ALSO (OPTIONAL)
  const filteredReviews = data.reviews.filter((rev) =>
    rev.company.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="home-body">
      <h1 className="main-title">Find Trustworthy Companies</h1>
      <p className="sub-title">Read reviews from real customers</p>

      {/* SEARCH BAR */}
      <SearchBar value={query} onChange={setQuery} />

      {/* SHOW ONLY MATCHING CATEGORIES */}
      <Categories categories={filteredCategories} />

      {/* SHOW ONLY MATCHING REVIEWS */}
      <Reviews reviews={filteredReviews} />
    </div>
  );
}
