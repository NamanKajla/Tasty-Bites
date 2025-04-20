import { useState } from "react";
import { useSearch } from "../context/SearchContext";

function Home() {
  const { searchTerm, setSearchTerm, results, setResults } = useSearch();
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    setLoading(true);
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      const data = await res.json();
      setResults(data.meals || []);
    } catch (error) {
      console.error("Error fetching meals:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Search for a Recipe</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="e.g. Pasta"
        style={{ padding: "0.5rem", marginRight: "0.5rem" }}
      />
      <button onClick={handleSearch} style={{ padding: "0.5rem 1rem" }}>Search</button>

      <div style={{ marginTop: "2rem" }}>
        {loading && <p>Loading...</p>}

        {!loading && results.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            {results.map((meal) => (
              <div key={meal.idMeal} style={{ width: "200px", border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
                <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: "100%", borderRadius: "4px" }} />
                <h4 style={{ marginTop: "0.5rem" }}>{meal.strMeal}</h4>
              </div>
            ))}
          </div>
        )}

        {!loading && results.length === 0 && searchTerm && (
          <p>No meals found. Try another keyword.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
