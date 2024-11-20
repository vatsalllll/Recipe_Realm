import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RecipeDetailsPage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=27adda5772dd432aaea834a249cdd39b`
        );
        setRecipe(response.data);
      } catch (err) {
        setError("Failed to fetch recipe details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (loading) return <p>Loading recipe details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        style={{ maxWidth: "100%", borderRadius: "10px" }}
      />
      <h2>Ingredients</h2>
      <ul>
        {recipe.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <ol>
        {recipe.analyzedInstructions.length > 0
          ? recipe.analyzedInstructions[0].steps.map((step) => (
              <li key={step.number}>{step.step}</li>
            ))
          : "No instructions available."}
      </ol>
      <h3>Details</h3>
      <p><strong>Cooking Time:</strong> {recipe.readyInMinutes} minutes</p>
      <p><strong>Servings:</strong> {recipe.servings}</p>
    </div>
  );
};

export default RecipeDetailsPage;
