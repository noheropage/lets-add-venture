import React from 'react';

const SearchBar = ({ keyword, setKeyword }) => {
    const BarStyling = { width: "25rem", background: "white", border: "1px solid grey", padding: "0.5rem" };
    return (
        <input
            style={BarStyling}
            key="random1"
            value={keyword}
            placeholder= {"climbing near me..          " }
            onChange={(e) => setKeyword(e.target.value)}
        />
    );
}

export default SearchBar;