import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text}) => <h1>{text}</h1>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Statistics = ({good, neutral, bad}) => {
  const all = (good + neutral + bad)
  const average = ((good - bad) / all)
  const positive = (good * 100 / all + " %")

  if (all === 0){
    return <p>no feedback given</p>
  }

  return (
    <table><tbody>
    <Statistic text="good" value={good} />
    <Statistic text="neutral" value={neutral} />
    <Statistic text="bad" value={bad} />
    <Statistic text="all" value={all} />
    <Statistic text="average" value={average} />
    <Statistic text="positive" value={positive} />
    </tbody></table>
  )
}

const Statistic = ({text, value}) => {
  return (
    <tr>
      <td>
        {text}: {value}
      </td>
    </tr>
    )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setValue = (comment) => {
    if (comment === "good") {
      setGood(good + 1)
    }
    if (comment === "neutral") {
      setNeutral(neutral + 1)
    }
    if (comment === "bad") {
      setBad(bad + 1)
    }

  }

  return (
    <div>
      <Header text="give feedback"/>
      <Button handleClick={() => setValue("good")} text="good"/>
      <Button handleClick={() => setValue("neutral")} text="neutral"/>
      <Button handleClick={() => setValue("bad")} text="bad"/>
      <Header text="statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root'))
