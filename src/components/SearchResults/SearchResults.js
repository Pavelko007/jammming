import React from 'react';
import TrackList from '../Tracklist/Tracklist';

const SearchResults = (props) => {
    return (
        <div>
            <h2>Results</h2>
            <TrackList tracks={props.searchResults}/>
        </div>
    )
};

export default SearchResults;