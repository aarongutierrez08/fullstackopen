import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/persons'
import ErrorNotification from './components/ErrorNotification'
import SuccessNotification from './components/SuccessNotification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [succesMessage, setSuccesMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (e) => {
    e.preventDefault()

    if (persons.find(p => p['number'] === newNumber)) {

      alert(`${newNumber} is already added to phonebook`)

    } else if (persons.find(p => p['name'].toLowerCase() === newName)) {

      const person = persons.find(p => p['name'].toLowerCase() === newName)
      const changedPerson = { ...person, number: newNumber }

      if(window.confirm(`Replace ${person.name}'s old phone number with a new one?`)){
        personService
        .update(person.id, changedPerson)
        .then(returnedPerson => {
          setPersons(persons.map(p => p.id !== person.id ? p : returnedPerson))
          })
        .catch(() => {
          setErrorMessage(`Person '${person.name}' was already deleted`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
      }

    } else {

      const personObject = {
        name: newName,
        number: newNumber
      }

      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName("")
          setNewNumber("")
        })

      setSuccesMessage(
        `Person '${personObject.name}' with number '${personObject.number}' successfully added`
      )
      setTimeout(() => {
        setSuccesMessage(null)
      }, 5000)
    }
  }

  const deletePerson = (id, name, e) => {
    e.preventDefault()
    if(window.confirm(`Delete ${name}?`)){
      personService.deleteP(id)
      .then(setPersons((prevPersons) => prevPersons.filter(person => person.id !== id)))
      .catch(() => {
        setErrorMessage(`Person '${name}' was already deleted before`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterPerson = (event) => {
    setFilter(event.target.value.toLowerCase())
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <ErrorNotification message={errorMessage} />
      <SuccessNotification message={succesMessage} />
      <Filter handle={handleFilterPerson} />
      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson}
                  handleNameChange={handleNameChange}
                  handleNumberChange={handleNumberChange}
                  newName={newName}
                  newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} deletePerson={deletePerson}/>
    </div>
  )
}

export default App