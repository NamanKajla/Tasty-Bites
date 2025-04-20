import React, { useEffect } from "react";
import { useSearch } from "../context/SearchContext";
import "./Recipes.css";

const Recipes = () => {
  const { searchTerm, results, setResults } = useSearch();

  useEffect(() => {
    if (!searchTerm) return;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.meals || []);
      });
  }, [searchTerm]);

  return (
    <div className="recipes-page">
      <h2>Results for: <span className="highlight">{searchTerm}</span></h2>

      {results.length === 0 ? (
        <p>No recipes found for "{searchTerm}"</p>
      ) : (
        <div className="recipe-list">
          {results.map((meal) => (
            <div key={meal.idMeal} className="recipe-card">
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <h3>{meal.strMeal}</h3>
              <p>{meal.strArea} Cuisine</p>
              <a href={meal.strSource || meal.strYoutube} target="_blank" rel="noreferrer">
                View Recipe
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Recipes;
