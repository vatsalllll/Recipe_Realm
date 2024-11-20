import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RecipeDetailsPage from './pages/RecipeDetailsPage';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
        </Routes>
    </Router>
);

export default App;
