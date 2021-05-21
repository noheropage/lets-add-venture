import React from "react";
import mapResults from "../../images/results.png";

function ResultsBar() {
    //putting a "look-alike" pic for a results bar for presentation. In the future will be able to render what you type in the search bar
    return (
        <div className="results">
            <img className="results-bar" src={mapResults} />
        </div>
    )
}

export default ResultsBar;