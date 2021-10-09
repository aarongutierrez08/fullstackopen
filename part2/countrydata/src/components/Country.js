import React from "react"
import Weather from "./Weather"

const Country = ({country, filters, handleShow}) => {

    const filtered = country.filter(c => c["name"].toLowerCase().includes(filters))

    if (filtered.length > 10) {
        return (
            <p>Too many matches, specify another filter</p>
        )
    }

    if (filtered.length <= 10 && filtered.length > 1) {

        return (
            <ul>
                {filtered.map(c =>
                    <li key={c.name}> {c.name}
                        <button id={c.name} onClick={handleShow}>show</button>
                    </li>

                )}
            </ul>
        )
    }

    if (filtered.length === 1) {
        
        return (
            <>
                <h1>{filtered[0].name}</h1>
                <p>capital: {filtered[0].capital}</p>
                <p>population: {filtered[0].population}</p>
                <h2>languages</h2>
                <ul>
                    {filtered[0].languages.map(l =>
                        <li key={l.name}> {l.name} </li>
                    )}
                </ul>
                <div>
                    <img alt={filtered[0].name} src={filtered[0].flag} width="200" height="100" />
                </div>
                <Weather filters={filtered[0].name} />
            </>
        )
    }

    return (<p>Specify another filter</p>)

}

export default Country