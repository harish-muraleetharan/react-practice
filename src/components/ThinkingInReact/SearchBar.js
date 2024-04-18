import React from 'react'

const SearchBar = ({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) => {
    return (
        <div>
            <form>
                <div>
                    <input
                        type="text"
                        value={filterText}
                        placeholder='Search .....'
                        onChange={(e) => { onFilterTextChange(e.target.value) }}
                    />
                </div>
                <div>
                    <label>
                        <input
                            type='checkbox'
                            checked={inStockOnly}
                            onChange={(e) => { onInStockOnlyChange(e.target.checked) }}
                        >
                        </input>
                        Only show products in stock
                    </label>
                </div>
            </form>
        </div>
    )
}

export default SearchBar