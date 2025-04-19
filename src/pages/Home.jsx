import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") return alert("Please enter a search term.");
    navigate(`/recipes?search=${query}`);
  };

  return (
    <div className="home-container">
      <h1>TastyBites 🍽️</h1>
      <p>Find delicious recipes by ingredients or dish name!</p>

      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search for a recipe..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Home;
