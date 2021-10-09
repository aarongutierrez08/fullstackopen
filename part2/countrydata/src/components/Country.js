import React, {useState} from "react"
import Weather from "./Weather"

//const Country = ({country, filters, handleShow}) => {
const Country = ({country, filters}) => {
    
    const initialFiltered = country.filter(c => c["name"].toLowerCase().includes(filters))
    
    const [filtered, setFiltered] = useState([initialFiltered])

    //const filtered = country.filter(c => c["name"].toLowerCase().includes(filters))

    const handleShow = (event) => {
        //console.log(event.target.id);
        setFiltered(event.target.id.toString().toLowerCase())
      }

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
            <div>
                <h1>{filtered[0].name}</h1>
                <p>capital: {filtered[0].capital}</p>
                <p>population: {filtered[0].population}</p>
                <h2>languages</h2>
                <ul>
                    {filtered[0].languages.map(l =>
                        <li key={l.name}> {l.name} </li>
                    )}
                </ul>
                    <img alt={filtered[0].name} src={filtered[0].flag} width="200" height="100" />
                <Weather filters={filtered[0].name} />
            </div>
        )
    }

    return (<p>Specify another filter</p>)

}

export default Country