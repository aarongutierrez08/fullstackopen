import React from 'react'
import ReactDOM from 'react-dom'

const Header = props => <h1>{props.course}</h1>

const Part = props => <p>{props.index.name} {props.index.exercises}</p>

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part index={props.part[0]} />
      <Part index={props.part[1]} />
      <Part index={props.part[2]} />
    </div>
  )
}

const Total = (props) => <p>Total = {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
      <div>
        <Header course={course.name} />
        <Content part={course.parts} />
        <Total parts={course.parts} />
      </div>
  )


}

ReactDOM.render(<App />, document.getElementById('root'))
