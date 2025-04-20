import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Recipes.css";

function Recipes() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search")

  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMeals = async ()=>{
    if (!query) return;
    setLoading(true)
    setError(null);

    try{
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      )

      const data = await res.json();
      setMeals(data.meals || []);
    } catch (err) {
      setError("Something went wrong while fetching recipes.");
    }

    setLoading(false);
  }
  useEffect(() => {
    fetchMeals();
  }, [query]);
  return (
    <div className="recipes-page">
      <h2>Results for: <span>{query}</span></h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="recipes-grid">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <div key={meal.idMeal} className="recipe-card">
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <h3>{meal.strMeal}</h3>
              <a href={meal.strSource || meal.strYoutube} target="_blank" rel="noreferrer">
                View Recipe
              </a>
            </div>
          ))
        ) : !loading ? (
          <p>No recipes found.</p>
        ) : null}
      </div>
    </div>
  )
}

export default Recipes
