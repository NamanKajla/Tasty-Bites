import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../context/SearchContext";
import "./Home.css";

const Home = () => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setSearchTerm } = useSearch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      setError("Please enter a search term.");
      return;
    }

    setError("");
    setSearchTerm(query);
    navigate(`/recipes?search=${query}`);
    setQuery("");
  };

  return (
    <div className="home-page">
      <h1>Find Delicious Recipes 🍽️</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={query}
          placeholder="Search for meals (e.g., Pasta)"
          onChange={(e) => setQuery(e.target.value)}
          className={error ? "input-error" : ""}
        />
        <button type="submit">Search</button>
        {error && <p className="error-text">{error}</p>}
      </form>
    </div>
  );
};

export default Home;
