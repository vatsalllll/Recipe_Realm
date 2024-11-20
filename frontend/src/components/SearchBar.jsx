import React from 'react'

const SearchBar = ({value, onChange, onSubmit}) => {
    return(
        <form onSubmit={onSubmit} className="search-bar">
        <input 
            type="text" 
            placeholder="Search recipes..." 
            value={value} 
            onChange={onChange} 
        />
        <button type="submit">Search</button>
    </form>
)};
export default SearchBar