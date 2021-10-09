import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from "./components/Filter"
import Country from "./components/Country"

const App = () => {
  const [country, setCountry] = useState([])
  const [filters, setFilters] = useState("")
  const [newFilters, setNewFilters] = useState("")

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        setCountry(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setFilters(event.target.value.toLowerCase())
  }

  const handleShow = (event) => {
    //console.log(event.target.id);
    //setFilters(event.target.id.toString().toLowerCase())
    setNewFilters(event.target.id.toString().toLowerCase())
  }

  return (
    <>
      <Filter filters={filters} handleFilterChange={handleFilterChange} />
      <Country filters={filters} newFilters={newFilters} country={country} handleShow={handleShow} />
    </>
  )
}

export default App
