import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const DayAnecdote = (props) => {
  return(
    <>
    <h1>Anecdote of the day</h1>
    <p>{props.anecdotes[props.selected]}</p>
    <p>{props.vote[props.selected]}</p>
    </>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const MostVoted = (props) => {
  const maxVoted = Math.max(...props.vote)
  const mostVoted = props.vote.indexOf(maxVoted)
  return(
    <>
    <h1>Anecdote with most votes</h1>
    <p>{props.anecdotes[mostVoted]}</p>
    <p>has {maxVoted} votes</p>
    </>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array(6).fill(0))

  const selectedRandom = () => {
    const num = Math.floor(Math.random() * anecdotes.length)
    if (num === selected){
      selectedRandom()
    } else {
    setSelected(num)
    }
  }

  const newVote = () => {
    const copy = [...vote]
    copy[selected] += 1
    setVote(copy)
  }

  return (
    <div>
      <DayAnecdote anecdotes={props.anecdotes} vote={vote} selected={selected} />
      <Button handleClick={() => selectedRandom()} text="next" />
      <Button handleClick={() => newVote()} text="vote" />
      <MostVoted vote={vote} anecdotes={props.anecdotes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)