import React from 'react';
import '../Styles/TodoSearch.css';

function TodoSearch({
    searchValue,
    setSearchValue
}) {

    return (
        <input
            placeholder="Buscar Todo"
            className="TodoSearch"
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
        />
    );
}

export { TodoSearch };

