import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../context/SearchContext";
import "./Home.css";

function Home() {
  const { searchTerm, setSearchTerm, results, setResults } = useSearch();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setSearchTerm(query);

    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await res.json();
      setResults(data.meals || []);
    } catch (err) {
      console.error("Error fetching meals:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-page">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search meals like Chicken, Pasta, etc..."
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}

      <div className="recipe-grid">
        {results.map((meal) => (
          <div key={meal.idMeal} className="recipe-card">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h4>{meal.strMeal}</h4>
            <div className="recipe-buttons">
              <button
                className="view-btn"
                onClick={() => navigate(`/recipe/${meal.idMeal}`)}
              >
                See Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
