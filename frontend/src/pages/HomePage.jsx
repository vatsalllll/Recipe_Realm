import React from 'react';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/Recipecard';
import { fetchRecipes } from '../services/Api';

const HomePage = () => {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const results = await fetchRecipes(query);
            setRecipes(results);
        } catch (err) {
            setError('Failed to fetch recipes.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <SearchBar 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                onSubmit={handleSearch} 
            />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div className="recipe-grid">
                {recipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
