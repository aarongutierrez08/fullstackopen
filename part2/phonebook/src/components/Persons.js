import React from "react"

const Persons = (props) => {

  const filtered = props.persons.filter(p => p['name'].toLowerCase().includes(props.filter) || p['number'].includes(props.filter))

  return (
    <ul>
      {
        filtered.map(p =>
          <li className='person' key={p.id}>
            {p.name} {p.number}
            <button onClick={(e) => props.deletePerson(p.id, p.name, e)}>delete</button>
          </li>
          )
      }
    </ul>
  )
}

export default Persons