import React from "react"

const Persons = (props) => {

  const filtered = props.persons.filter(p => p['name'].toLowerCase().includes(props.filter) || p['number'].includes(props.filter))

  return (
    <ul>
      {
        filtered.map(p =>
          <li key={p.id}>
            {p.name} {p.number}
          </li>)
      }
    </ul>
  )
}

export default Persons
