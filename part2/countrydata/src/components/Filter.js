import React from "react"

const Filter = ({filters, handleFilterChange}) => {
    return (
        <div>
            find countries: <input 
            value={filters}
            onChange={handleFilterChange}
            />
        </div>
    )
}

export default Filter